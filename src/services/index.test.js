import Service from './index';

jest.useFakeTimers();

describe('Service tests', () => {
  describe('Hunger tests', () => {
    it('should decrease hunger when eat is called', () => {
      const state = {
        started: false,
        health: 15,
        happiness: {
          total: 100,
          hunger: 100,
          boredom: 100,
          dirtness: 100,
          sleepness: 100,
        }
      };
      const handleUpdate = ({ happiness }) => {
        expect(happiness.hunger).toBe(80);
        expect(state.happiness.hunger).toBe(80);
      };
      const service = new Service({ state, handleUpdate });
      service.eat();
    })

    it('should not decrease hunger bellow zero', () => {
      const state = {
        started: false,
        health: 15,
        happiness: {
          total: 100,
          hunger: 10,
          boredom: 100,
          dirtness: 100,
          sleepness: 100,
        }
      };
      const handleUpdate = ({ happiness }) => {
        expect(happiness.hunger).toBe(0);
      };
      const service = new Service({ state, handleUpdate });
      service.eat();
    })
  });

  describe('Health tests', () => {
    it('should decrease health over time, when there is no intereaction', () => {
      return new Promise((resolve, reject) => {
        const state = {
          started: false,
          health: 15,
          happiness: {
            total: 100,
            hunger: 10,
            boredom: 100,
            dirtness: 100,
            sleepness: 100,
          }
        };
        const handleUpdate = ({ health }) => {
          // expect(health).toBe(300);
          if (health === 0) {
            return resolve()
          };
          // return reject(health);
        };
        const service = new Service({ state, handleUpdate });
        service.start();
        jest.runAllTimers();
      })
    });
  });
});

