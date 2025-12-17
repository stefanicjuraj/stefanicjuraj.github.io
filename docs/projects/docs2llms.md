---
title: docs2llms
sidebar_position: 11
---

[**GitHub**](https://github.com/stefanicjuraj/docs2llms) • [**jsr.io/@jurajstefanic/docs2llms**](https://jsr.io/@jurajstefanic/docs2llms)

**Transform software documentation into formats optimized for use by AI and LLMs.**

A command-line tool built with Deno and TypeScript.

Using the [llms.txt standard](https://llmstxt.org/), the tool ensures consistent text formatting for AI and LLMs by extracting software documentation from local directories or remote repositories and converting it into _llms.txt_ and _llms-full.txt_ files.

The _llms.txt_ file contains hyperlinks to the documentation files, while the _llms-full.txt_ file contains the fully processed documentation content. View examples of the generated [llms.txt](https://github.com/stefanicjuraj/docs2llms/blob/main/llms.txt) and [llms-full.txt](https://github.com/stefanicjuraj/docs2llms/blob/main/llms-full.txt) files for this repository.

## Installation

```sh
deno install -n docs2llms https://jsr.io/@jurajstefanic/docs2llms/0.0.6/mod.ts --allow-read --allow-net --allow-write --allow-run --global -f
```

Published version: [jsr.io/@jurajstefanic/docs2llms](https://jsr.io/@jurajstefanic/docs2llms)

## Usage

### Local

```sh
docs2llms --local /path/to/directory
```

### Remote

```sh
docs2llms --github username/repository
```

```sh
docs2llms --gitlab username/repository
```

### Options

```txt
Usage (local):  ➜ docs2llms --local /path/to/directory
Usage (remote): ➜ docs2llms --github username/repository
                ➜ docs2llms --gitlab username/repository

➜ --llms:        Output file for hyperlinks to the documentation files.
➜ --llms-full:   Output file for full documentation content.
➜ --format:      Format of the documentation content. Available: md, mdx, txt, rst.
➜ --branch:      Repository branch to clone from. Defaults to main.
➜ --output-dir:  Output directory for the processed documentation content.
➜ --skip:        Folders to skip during processing documentation content.
➜ --exclude:     Exclude documentation files based on file extensions.
➜ --max-size:    Include documentation files smaller than the maximum size (in MB).
➜ --summary:     Summary of the processed documentation files.
➜ --analyze:     Analysis report of the processed documentation content.
➜ --preview:     Preview the documentation files before processing.
➜ --interactive: Manually select each documentation file to be processed.
➜ --backup:      Create backup copies of existing documentation files before overwriting.
```

#### **`--llms`**

Specify the name of the output file containing content hyperlinks. Defaults to `llms.txt`.

```bash
docs2llms --github username/repository --llms llms
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--llms-full`**

Specify the name of the output file containing the full content. Defaults to `llms-full.txt`.

```bash
docs2llms --github username/repository --llms-full llms-full
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--format`**

Specify the format of the processed content. Options: `txt`, `md`, `rst`. Defaults to `txt`.

```bash
docs2llms --github username/repository --format md
```

`✅ llms.md    ✅ llms-full.md`

---

#### **`--branch`**

Specify the repository branch to clone from. Defaults to `main`.

```bash
docs2llms --github username/repository --branch main
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--output-dir`**

Specify the output directory for the processed content. Defaults to the current directory.

```bash
docs2llms --github username/repository --output-dir .
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--skip`**

Specify folders to skip during processing.

```bash
docs2llms --github username/repository --skip assets
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--exclude`**

Specify file extensions to exclude from processing. Options: `md`, `mdx`, `rst`, `txt`.

```bash
docs2llms --github username/repository --exclude rst
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--max-size`**

Specify the maximum file size (in MB) to include.

```bash
docs2llms --github username/repository --max-size 10
```

`✅ llms.txt    ✅ llms-full.txt`

---

#### **`--summary`**

Display a summary of the processed content after extraction.

```bash
docs2llms --github username/repository --summary
```

```txt
✅ llms.txt     ✅ llms-full.txt
📄 Summary:
+ example/docs/markdown.md
+ example/docs/restructuredtext.rst
+ example/docs/plain-text.txt
+ README.md
```

---

#### **`--analyze`**

Generate an analysis report of the content, including file count, word count, and average file size.

```bash
docs2llms --github username/repository --analyze
```

```txt
📊 Documentation Analysis
📁 Folder count:      10
📄 File count:        50
💬 Word count:        50300
📏 Average file size: 3.20 MB
```

---

#### **`--preview`**

Preview the content in the terminal prior to processing.

```bash
docs2llms --github username/repository --preview
```

```txt
📂 Preview:
example/docs/
- markdown.md
- restructuredtext.rst
- plain-text.txt
./
- README.md
Do you want to process the content? (y/n)
```

---

#### **`--interactive`**

Manually select and confirm each file for processing.

```bash
docs2llms --github username/repository --interactive
```

```txt
(1/4): example/docs/markdown.md? (y/n)
(2/4): example/docs/restructuredtext.rst? (y/n)
(3/4): example/docs/plain-text.txt? (y/n)
(4/4): README.md? (y/n)
✅ llms.txt     ✅ llms-full.txt
```

---

#### **`--backup`**

Create backup copies of existing documentation files before overwriting them.

```bash
docs2llms --github username/repository --backup
```

```txt
✅ llms.txt ➜ backup created: llms.txt.bak
✅ llms-full.txt ➜ backup created: llms-full.txt.bak
✅ llms.txt     ✅ llms-full.txt
```

## Automation

To automate this process, the `docs2llms` workflow can be integrated into GitHub actions or GitLab CI/CD pipelines. This allows the _llms.txt_ and _llms-full.txt_ files to be updated automatically when changes are made to the documentation.

### Github Actions

The GitHub Actions workflow ([.github/workflows/update-llms.yml](https://github.com/stefanicjuraj/docs2llms/blob/main/.github/workflows/update-llms.yml)) demonstrates the automation of `docs2llms` execution when changes are pushed to the main branch of the GitHub repository.

For this workflow, the `docs2llms` command is invoked within the `jobs` section with the following options:

`docs2llms --local . --exclude rst,txt --skip example`

This command processes the documentation in the current directory, excluding files with `.rst` and .txt extensions, and skipping the `example` folder. It updates the _llms.txt_ and _llms-full.txt_ files to ensure that the documentation content is optimized and up to date for use by AI and LLMs.

### GitLab CI/CD

The GitLab CI/CD workflow ([.gitlab/workflows/gitlab-ci.yml](https://github.com/stefanicjuraj/docs2llms/blob/main/.gitlab/workflows/gitlab-ci.yml)) demonstrates the automation of `docs2llms` execution when changes are pushed to the main branch of the GitLab repository.

For this workflow, the `docs2llms` command is invoked within the script section of the `update_llms` job with the following options:

`docs2llms --local . --exclude rst,txt --skip example`

This command processes the documentation in the current directory, excluding files with `.rst` and `.txt` extensions, and skipping the `example` folder. It updates the _llms.txt_ and _llms-full.txt_ files to ensure that the documentation content is optimized and up to date for use by AI and LLMs.
