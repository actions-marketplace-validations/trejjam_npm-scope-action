# Configure NPM Scope GitHub Action

Github Action to set scope in a .npmrc file

![.github/workflows/main.yml](https://github.com/trejjam/npm-scope-action/workflows/.github/workflows/main.yml/badge.svg)

## Inputs

### `accessToken` **required**
### `organization` **required**
### `feed` **required**
### `username` fallback to `organization`
### `email` fallback to dummy string

## Example usage

```yaml
uses: trejjam/npm-scope-action
with:
  accessToken: ${{ secrets.NPM_SCOPE_PERSONAL_ACCESS_TOKEN }}
  organization: ${{ secrets.NPM_SCOPE_ORGANIZATION }}
  feed: ${{ secrets.NPM_SCOPE_FEED }}
```
