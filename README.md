# Configure NPM Scope GitHub Action

Github Action to set scope in a .npmrc file

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
