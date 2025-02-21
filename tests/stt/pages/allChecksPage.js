// xpath used here because locate('td').withText('') method does not work correctly
const checkRow = (checkName) => `//tr[td[text()="${checkName}"]]`;
const actionButton = (checkName) => locate(checkRow(checkName)).find('td').last().find('button');

module.exports = {
  url: 'graph/pmm-database-checks/allChecks',
  elements: {
    checkNameCell: (checkName) => locate(checkRow(checkName)).find('td').at(1),
    descriptionCellByName: (checkName) => locate(checkRow(checkName)).find('td').at(2),
    statusCellByName: (checkName) => locate(checkRow(checkName)).find('td').at(3),
    intervalCellByName: (checkName) => locate(checkRow(checkName)).find('td').at(4),
    tableBody: '$db-checks-all-checks-tbody',
    modalContent: '$modal-content',
  },
  buttons: {
    disableEnableCheck: (checkName) => actionButton(checkName).first(),
    openChangeInterval: (checkName) => actionButton(checkName).last(),
    intervalValue: (intervalName) => locate('label').withText(intervalName),
    applyIntervalChange: '$change-check-interval-modal-save',
  },
  messages: {
    successIntervalChange: (checkName) => `Interval changed for ${checkName}`,
    changeIntervalText: (checkName) => `Set interval for ${checkName}`,
  },
  checks: [{
    name: 'MySQL Empty Password',
    description: 'This check returns an error if there are users without passwords.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'MySQL Version',
    description: 'This check returns warnings if MySQL, Percona Server for MySQL, or MariaDB version is not the latest one.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'PostgreSQL Version',
    description: 'This check returns warnings if PostgreSQL minor version is not the latest one. Additionally notice is returned'
        + ' if PostgreSQL major version is not the latest one. Error is returned if the major version of PostgreSQL is 9.4 or older.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'PostgreSQL Super Role',
    description: 'This check returns a notice if there are users with superuser role.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'MongoDB Authentication',
    description: 'This check returns warnings if MongoDB authentication is disabled.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'MongoDB CVE Version',
    description: 'This check returns errors if MongoDB or Percona Server for MongoDB version is less than the latest one with CVE fixes.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'MongoDB Version',
    description: 'This check returns warnings if MongoDB or Percona Server for MongoDB version is not the latest one.',
    status: 'Enabled',
    interval: 'Standard',
  }, {
    name: 'MySQL Anonymous Users',
    description: 'This check returns warnings if there are anonymous users.',
    status: 'Enabled',
    interval: 'Standard',
  }],
};
