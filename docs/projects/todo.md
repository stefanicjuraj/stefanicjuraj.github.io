---
title: todo.md
sidebar_position: 12
---

[**GitHub**](https://github.com/stefanicjuraj/todo.md)

Local, simple, and fast command-line todo application with export to Markdown.

<img src="/img/todo-md.gif" width="100%" alt="todo" />

```markdown
# Todo

**Total:** 3 **To Do:** 3 **Done:** 0

## To Do

- [ ] task one
- [ ] task two
- [ ] task three
```

## Installation

### Build from Source

1. Clone the repository:

```bash
git clone https://github.com/stefanicjuraj/todo.md
```

2. Build the binary:

```bash
make build
```

3. Install (choose one):

   **System-wide installation** (requires sudo):

   ```bash
   make install
   ```

   **User installation** (no sudo required):

   ```bash
   make install-user
   ```

   Make sure `~/go/bin` is in your PATH.

### Manual Installation

```bash
go build -o bin/todo .
sudo cp bin/todo /usr/local/bin/
```

## Usage

```
todo add <description> → add a new todo item
todo list → list all todos with statistics
todo done <id> → mark a todo as done
todo undone <id> → mark a todo as not done
todo remove <id> → remove a todo (with confirmation)
todo export → export todos to todo.md file
```

## Storage

Todos are stored in `~/.todo.json` in JSON format. The file is automatically created when you add your first todo. When exporting to Markdown (`todo export`), the file is saved as `todo.md`.
