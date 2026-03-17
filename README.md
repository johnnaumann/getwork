# getwork

This repo tracks “plugins” as small, self-contained directories under `plugins/` with a `manifest.json` and optional docs.

## Plugins

- **Registry**: `plugins/registry.json`
- **Each plugin**: `plugins/<id>/manifest.json`

### Add a plugin

To add a new plugin, create `plugins/<id>/manifest.json` and register it in `plugins/registry.json`.

The `figma` plugin is already added.