# 🧪 TestScript

A CLI tool that **automatically generates unit tests for TypeScript code**, helping developers maintain flow, reduce boilerplate, and improve test coverage.  
Built with **TypeScript, Vitest, OCLIF, ts-morph, and OpenAI**.

🔗 **Demo:** _Here..._

---

## ❓ Problem

Writing and maintaining unit tests is necessary but time consuming. Developers often lose flow switching between source code and test files, scaffolding boilerplate, and ensuring compatibility with frameworks.  
Even motivated engineers face setup friction and lack of immediate feedback leading to poor test coverage or rushed tests added late in the cycle.

---

## 💡 Solution

This tool automates the creation of unit tests for TypeScript projects by:

- 🧩 Parsing source code with **ts-morph** for better context  
- 🤖 Using **OpenAI** to generate intelligent test cases  
- 🧪 Scaffolding tests with **Vitest** for modern, fast execution  
- 📄 Delivering everything in a **single test file** per module  
- 🖥️ Running as an **easy-to-use CLI** via **OCLIF**  

---

## 🚀 Features

- ⚡ Generate unit tests automatically from source files  
- 📝 Output structured, runnable Vitest test files  
- 🔄 Update existing test cases as code evolves  
- 🤖 AI-assisted edge case suggestions  
- 🖥️ CLI interface for smooth developer workflow  

---

## 🛠️ Tech Stack

- **Language:** TypeScript  
- **Test Runner:** Vitest  
- **CLI Framework:** OCLIF  
- **LLM Integration:** OpenAI  
- **AST Parsing:** ts-morph  

---

## 📦 Installation

Clone the repo:  
```bash
git clone https://github.com/your-username/testscript.git
cd testscript
```

---

## Install dependencies:

```bash
npm install

```

## Run the CLI:

```bash
npx testcript ./src/myFile.ts

```

## 📜 Example

Source file (math.ts):

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

Generated test (math.test.ts):

```ts
import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

## 🤝 Contributing

Pull requests are welcome. Please open an issue first to discuss major changes.

## 📜 License

This project is licensed under the [MIT License](./LICENSE).
