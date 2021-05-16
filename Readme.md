# Ako libraries

![logo](https://raw.githubusercontent.com/ako-lang/ako/master/logo.png)

Provide extra feature to the AKO Language

## Usage

Those libraries can be used by any program as dependencies
```sh
ako deps add ako-lang/ako-libraries:fs
```
or manually in manifest.yaml (but you will need to run `ako deps install`)
```yaml
deps:
  - { scope: FS, url: ako-lang/ako-libraries:fs, version: latest }
```

## Library
* **[File System](./fs/Readme.md)** : Only for nodeJS Usage (cli or node)

