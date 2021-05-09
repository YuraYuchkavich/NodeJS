# Casear cipher cli

This is a command line application. It encrypts and decrypts text with Ceasar's cipher.
The application encrypts and decrypts only letters of the Latin alphabet. All other characters,
including letters from alphabets of other languages, number, punctuation marks, etc. remain unchanged.

---

## How to install

To install this application, you must perform the following steps:

1. Download it from this repository.
2. Run the command line and go to the application folder.
3. Enter the command "npm install" or "npm i" and wait for the dependency installation
4. The application is ready to go!

---

## How to use

After installation completed to start the application, in the folder with the application,
enter the following into the command line: 'node ceasar-cli [options]', where option are command
line parameters that determine the operation of the application (short alias and
full name):

- -s, --shift: a shift
- -i, --input: an input file
- -o, --output: an output file
- -a, --action: an action encode/decode

The **action** option can take the values of **encode** and **decode** and indicates what
needs to be done with the incoming text: **encrypt** or **decrypt**.

The **shift** option must be a positive integer. It denotes a **shift** of letters for
encryption and decryption.

**Action** and **Shift** option are **mandatory**: if one of them absent, there will be an
**error. **Input** and **Output** option must be relative or absolute path to file or
even filename if file is in application root folder (**input** is the path to the file from
which the text is read; **output\*\* is the path to the file where the text will be written).

If the file on any of the paths **doesn't exists** of the path is **incorrect**, there will
be an **error**.

If the **input** and/or **output** options are absent, then **reading** and/or **writing**
will be carried out from/to the **command line**. To **interrupt** the process, in this
case, press **Ctrl+C**.

---

## Example of usage

### Encryption with shorthand names of the options

````bash
$ node casear-cli -a encode -s 5 -i "./input.txt" -o "./output.txt"

Before:

> input.txt
> `This is secret. Message about "_" symbol`

> output.txt
> *empty*

After:

> input.txt
> `This is secret. Message about "_" symbol`

> output.txt
> `Ymmx mx xjhwjy. Rjxxflj fgtzy "_" xergtq `

### Decryption with names of the options

```bash
$ node casear-cli -a decode -s 5 -i "./input.txt" -o "./output.txt"

Before:

> input.txt
> `Ymmx mx xjhwjy. Rjxxflj fgtzy "_" xergtq`

> output.txt
> *empty*

After:

> input.txt
> `Ymmx mx xjhwjy. Rjxxflj fgtzy "_" xergtq`

> output.txt
> `This is secret. Message about "_" symbol`
````
