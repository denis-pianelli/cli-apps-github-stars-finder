const axios = require('axios');
const yargs = require('yargs');

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

async function getMostStarredProjects(startDate, endDate) {
  try {
    const queryString = `created:${startDate}..${endDate} sort:stars-desc`;
    const response = await axios.get(GITHUB_API_URL, {
      params: { q: queryString },
    });

    const { items } = response.data;
    return items;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error.message);
    throw error;
  }
}

yargs
  .option('start', {
    alias: 's',
    describe: 'Start date (YYYY-MM-DD)',
    demandOption: true,
  })
  .option('end', {
    alias: 'e',
    describe: 'End date (YYYY-MM-DD)',
    demandOption: true,
  })
  .help();

const argv = yargs.argv;

const startDate = argv.start;
const endDate = argv.end;

getMostStarredProjects(startDate, endDate)
  .then((projects) => {
    console.log('Most starred GitHub projects in the date range:');
    projects.forEach((project, index) => {
      console.log(
        `${index + 1}. ${project.name} - ${project.stargazers_count} stars`
      );
    });
  })
  .catch((error) => {
    console.log('error:', error.message);
  });
