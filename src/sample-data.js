module.exports = {
  stores: {
    'SSBenz Sofia': {
      orders: [
        {
          human: 'Stoil Filiov',
          time: new Date(2017, 4, 5, 15, 11, 45, 0),
          cars: [
            {
              model: 'C-Class',
              engine: '3.0 tdi'
            }
          ],
          price: 70000,
          address: '31 Ivan Vazov Street, Sofia, Bulgaria',
          status: 'Confirmed' // status := Open -> Confirmed -> Tested
        },
        {
          human: 'Ivan Ivanov',
          time: new Date(2017, 4, 4, 20, 31, 0, 0),
          cars: [
            {
              model: 'S-Class',
              engine: '6.3 amg'
            }
          ],
          price: 150000,
          address: '123 Tsarigradsko Shose, Sofia, Bulgaria',
          status: 'Tested' // status := Open -> Confirmed -> Tested
        }
      ]
    },
    'SSBenz Plovdiv': {
      orders: []
    }
  },
  humans: {
    'Stoil Filiov': {
      conversations: [
        {
          who: 'bot',
          text:
            'Hi… I’m test drive registration bot. Please, tell me your name and which specific model would you like to test?',
          time: new Date(2017, 4, 5, 15, 10, 0, 0)
        },
        {
          who: 'human',
          text: 'My name is Stoil Filiov and I want to test E-Class 3.2 cdi.',
          time: new Date(2017, 4, 5, 15, 10, 30, 0)
        },
        {
          who: 'bot',
          text: 'Please, tell me the date and time you want to test the car?',
          time: new Date(2017, 4, 5, 15, 11, 0, 0)
        },
        {
          who: 'human',
          text: 'I want to test the car on 06.06.2017 at 16:00',
          time: new Date(2017, 4, 5, 15, 11, 30, 0)
        }
      ],
      orders: [
        {
          time: new Date(2017, 4, 5, 15, 11, 45, 0),
          cars: [
            {
              model: 'E-Class',
              engine: '3.2 cdi'
            }
          ],
          price: 70000,
          address: '31 Ivan Vazov Street, Sofia, Bulgaria',
          status: 'Confirmed' // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    },
    'Ivan Ivanov': {
      conversations: [
        {
          who: 'bot',
          text:
            'Hi… I’m test drive registration bot. Please, tell me your name and which specific model would you like to test?',
          time: new Date(2017, 4, 4, 20, 30, 0, 0)
        },
        {
          who: 'human',
          text: 'My name is Ivan Ivanov and I want to test S-Class 6.3 amg.',
          time: new Date(2017, 4, 4, 20, 30, 15, 0)
        },
        {
          who: 'bot',
          text: 'Please, tell me the date and time you want to test the car?',
          time: new Date(2017, 4, 4, 20, 30, 30, 0)
        },
        {
          who: 'human',
          text: 'I want to test the car on 05.05.2017 at 18:00',
          time: new Date(2017, 4, 4, 20, 30, 45, 0)
        }
      ],
      orders: [
        {
          time: new Date(2017, 4, 4, 20, 31, 0, 0),
          cars: [
            {
              model: 'S-Class',
              engine: '6.3 amg'
            }
          ],
          price: 150000,
          address: '123 Tsarigradsko Shose, Sofia, Bulgaria',
          status: 'Tested' // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    }
  }
};
