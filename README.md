# Relaya Node.js SDK

TypeScript/Node.js SDK for Relaya MAX API.

## Installation

```bash
npm i @relaya/sdk-node
```

## Quick Start

```ts
import { AccountApi } from '@relaya/sdk-node';

const api = new AccountApi('https://api.relaya.ru/v1');
api.accessToken = process.env.RELAYA_API_TOKEN || '';

const { body } = await api.getAccountModules();
console.log(body);
```

## Build

```bash
npm install
npm run build
```

## Publish to npm

```bash
npm publish --access public
```

The package is generated from OpenAPI and intended to be re-generated when the API contract changes.
