// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'night-blue',

    // clients configs
    api: {
        jenkins: {
            baseUrl: process.env.JENKINS_URL,
                basicAuthUser: process.env.JENKINS_USER,
                basicAuthPassword: process.env.JENKINS_PASS,
                customCa: process.env.JENKINS_CA
        },
        bitbucket: {
            baseUrl: process.env.BITBUCKET_URL,
            basicAuthUser: process.env.BITBUCKET_USER,
            basicAuthKey: process.env.BITBUCKET_KEY
        },
        jira: {
            baseUrl: process.env.JIRA_URL,
            basicAuthUser: process.env.JIRA_USER,
            basicAuthKey: process.env.JIRA_KEY
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                  type: 'jenkins.job_status_progress',
                  job: process.env.JENKINS_JOB_0,
                  columns: 1, rows: 1,
                  x: 0, y: 0
                },
				{
				  type: 'jenkins.job_builds_histogram',
				  job: process.env.JENKINS_JOB_0,
                  cap: 20,
				  columns: 2, rows: 1,
				  x: 1, y: 0
				},
                {
                  type: 'jenkins.job_test_result',
                  job: process.env.JENKINS_JOB_0,
                  columns: 1, rows: 1,
                  x: 0, y: 1
                },
                {
                    type: 'jira.current_sprint',
                    project: process.env.JIRA_PROJECT,
                    board_id: process.env.JIRA_BOARD_ID,
                    columns: 1, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'bitbucket.pull_requests',
                    project: process.env.BITBUCKET_PROJECT,
                    repo: process.env.BITBUCKET_REPO,
                    columns: 1, rows: 1,
                    x: 2, y: 1
                },
            ]
        },
        {
            columns: 2,
            rows:    1,
            widgets: [
                {
                  type: 'jenkins.job_status_progress',
                  job: process.env.JENKINS_JOB_0,
                  columns: 1, rows: 1,
                  x: 0, y: 0
                },
                {
                  type: 'jenkins.job_test_result',
                  job: process.env.JENKINS_JOB_0,
                  columns: 1, rows: 1,
                  x: 1, y: 0
                }
            ]
        }
    ]
};

module.exports = config;
