Mesh doesn't have base classes or other abstractions to help you create adapters. You'll need to follow a few patterns to ensure that whatever adapter you write are interchangeable, and interoperable with other plugins. <br />

Before you begin writing adapters, install the `test suite` associated with them. For database adapters specifically, that command is: `npm install mesh-store-test-cases`. <br />

Below are a few operations you'll need to implement in order for `mesh-store-test-cases` to pass.

#### insert operation

Inserts one or many items in a collection. Here are a few cases that need to work:

<Example runnable="false">
  ```javascript
  ///index.js
  // inserting one item into the people collection
  customBus({ name: "insert", collection: "people", data: { name: "Jeff" } });

  // inserting multiple items in people collection
  customBus({ name: "insert", collection: "people", data: [
    { name: "Frank" },
    { name: "Sarah" }
  });
  ```
</Example>

#### remove operation

Removes one or many items from a collection.

#### update operation

Updates one or many items in a collection.

#### load operation

Loads one or many items in a collection.