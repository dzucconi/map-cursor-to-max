# map-cursor-to-max

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![npm](https://img.shields.io/npm/v/map-cursor-to-max)](https://www.npmjs.com/package/map-cursor-to-max) [![Build Status](https://travis-ci.org/dzucconi/map-cursor-to-max.svg?branch=master)](https://travis-ci.org/dzucconi/map-cursor-to-max)

## What is this?

A simple function to map some cursor to its position within a maximum.

## Installation

```bash
yarn add map-cursor-to-max
```

## Usage

```javascript
import { mapCursorToMax } from "map-cursor-to-max";

mapCursorToMax(0, 10); // => 0
mapCursorToMax(1, 10); // => 1
mapCursorToMax(9, 10); // => 9
mapCursorToMax(10, 10); // => 0
mapCursorToMax(11, 10); // => 1
mapCursorToMax(-1, 10); // => 9
```

## Interface

```typescript
const mapCursorToMax: (cursor: number, max: number) => number;
```
