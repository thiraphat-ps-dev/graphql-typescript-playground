
# GraphQL TypeScript Project with Apollo Server

This project is a GraphQL API built with TypeScript and Apollo Server. It demonstrates a clean architecture with clear input and response types for all queries and mutations. The API interacts with a mock REST API for demonstration purposes.

## Project Structure

The project is structured into different features, each with its own schema and resolvers:

- **Product**
- **User**
- **Message**

## Features

### Product

#### Queries

1. **Get Product by ID**

```graphql
query {
  product {
    getProduct(input: { id: 1 }) {
      success
      message
      product {
        id
        title
        price
      }
    }
  }
}
```

2. **Get All Products**

```graphql
query {
  product {
    getAllProducts(input: { dummy: "value" }) {
      success
      message
      products {
        id
        title
        price
      }
    }
  }
}
```

#### Mutations

1. **Create Product**

```graphql
mutation {
  product {
    createProduct(input: { title: "New Product", price: 99.99 }) {
      success
      message
      product {
        id
        title
        price
      }
    }
  }
}
```

2. **Delete Product**

```graphql
mutation {
  product {
    deleteProduct(input: { id: 1 }) {
      success
      message
      product {
        id
        title
        price
      }
    }
  }
}
```

### User

#### Queries

1. **Get User by ID**

```graphql
query {
  user {
    getUser(input: { id: 1 }) {
      success
      message
      user {
        id
        name
      }
    }
  }
}
```

2. **Get All Users**

```graphql
query {
  user {
    getAllUsers(input: { dummy: "value" }) {
      success
      message
      users {
        id
        name
      }
    }
  }
}
```

#### Mutations

1. **Create User**

```graphql
mutation {
  user {
    createUser(input: { name: "John Doe" }) {
      success
      message
      user {
        id
        name
      }
    }
  }
}
```

2. **Delete User**

```graphql
mutation {
  user {
    deleteUser(input: { id: 1 }) {
      success
      message
      user {
        id
        name
      }
    }
  }
}
```

### Message

#### Queries

1. **Get Message by ID**

```graphql
query {
  message {
    getMessage(input: { id: 1 }) {
      success
      message
      messageData {
        id
        content
      }
    }
  }
}
```

2. **Get All Messages**

```graphql
query {
  message {
    getAllMessages(input: { dummy: "value" }) {
      success
      message
      messages {
        id
        content
      }
    }
  }
}
```

#### Mutations

1. **Create Message**

```graphql
mutation {
  message {
    createMessage(input: { content: "This is a new message" }) {
      success
      message
      messageData {
        id
        content
      }
    }
  }
}
```

2. **Delete Message**

```graphql
mutation {
  message {
    deleteMessage(input: { id: 1 }) {
      success
      message
      messageData {
        id
        content
      }
    }
  }
}
```

## Setup

1. Clone the repository.
2. Install the dependencies:
   ```bash
   yarn install
   ```
3. Start the Apollo Server:
   ```bash
   yarn start
   ```
4. Open [http://localhost:4000](http://localhost:4000) to access the GraphQL Playground.

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
