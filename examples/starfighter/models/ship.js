var Entity = require("./entity");
var Bullet = require("./bullet");
var grp    = require("./utils/getRotationPoint");

/**
 */

module.exports = Entity.extend({

  /**
   * default properties
   */

  drag        : 0.1,
  bulletTTL   : 1000 * 5,
  maxVelocity : 10,
  width       : 30,
  height      : 30,

  /**
   * updates the entity
   */

  move: function(vDelta, rDelta) {

    // update all models with this data
    this.update({
      velocity : Math.min(this.maxVelocity, Math.max(0, this.velocity + vDelta || 0)),
      rotation : (this.rotation + rDelta) % 360
    });
  },

  /**
   */

  shootPhaser: function() {

    var p = grp(this);

    // find the middle of the ship
    var x = this.x + this.height/2;
    var y = this.y + this.height/2;

    // add rotation & move position to end of ship.
    x += p.x * (this.width/2);
    y += p.y * (this.height/2);

    // fire lasers now
    return this.space.addEntity({
      type: "bullet",
      ttl: this.bulletTTL,
      ownerId: this.cid,
      velocity: 15,
      rotation: this.rotation,
      x: Math.round(x),
      y: Math.round(y)
    });
  }
});
