# GitHub Stars Finder

GitHub Stars Finder is a Node.js application that allows you to discover the most starred GitHub projects within a specified date range using GitHub's search API. This application utilizes the Axios library for HTTP requests and Yargs for dynamic command-line input.

## Table of contents

- [GitHub Stars Finder](#github-stars-finder)
	- [Table of contents](#table-of-contents)
	- [Requirements](#requirements)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Example](#example)
	- [License](#license)

## Requirements

- [Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/denis-pianelli/cli-apps-github-stars-finder.git
   ```

2. Install dependencies

   ```bash
   cd github-stars-finder
   npm install
   ```

## Usage

Run the script with the desired start and end dates using the following command:

```bash
node githubStars.js --start <start-date> --end <end-date>
```

Replace `<start-date>` and `<end-date>` with the desired date range in the format 'YYYY-MM-DD'. This will fetch and display the most starred GitHub projects created within that range.

## Example

```bash
node githubStars.js --start 2023-01-01 --end 2023-12-31
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
