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
        expect(service.state.happiness.hunger).toBe(80);
      };
      const service = new Service({ state, handleUpdate });
      service.eat();
    })

    it('service state should be immutable', () => {
      const handleUpdate = ({ happiness }) => {
        state.happiness.hunger = 70;
        expect(happiness.hunger).toBe(80);
        expect(service.state.happiness.hunger).toBe(80);
      };
      const service = new Service({ handleUpdate });
      const state = service.initState();
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
      console.log('health');
      return new Promise((resolve, reject) => {
        const state = {
          started: false,
          health: 15,
          maxHealth: 20,
          happiness: {
            total: 10,
            hunger: 10,
            boredom: 100,
            dirtness: 100,
            sleepness: 100,
          }
        };
        const handleUpdate = ({ health }) => {
          if (health === 0) {
            return resolve()
          };
        };
        const service = new Service({ state, handleUpdate });
        service.start();
        jest.runAllTimers();
      })
    });

    it('should NOT decrease health over time, when there is intereaction', () => {
      return new Promise((resolve, reject) => {
        console.log('entrou!');
        const state = {
          started: false,
          health: 15,
          maxHealth: 20,
          happiness: {
            total: 52,
            hunger: 10,
            boredom: 100,
            dirtness: 100,
            sleepness: 100,
          }
        };
        const handleUpdate = ({ health }) => {
          console.log(health);
          if (health === 15) {
            return resolve();
          };
          reject(health);
        };
        const service = new Service({ state, handleUpdate });
        service.start();
        service.eat();
        jest.runAllTimers();
      })
    });
  });
    describe('evaluateHappiness tests', () => {
      it('should return -1', () => {
        console.log('evaluate');
        const state = {
          started: false,
          health: 15,
          happiness: {
            total: 40,
            hunger: 10,
            boredom: 100,
            dirtness: 100,
            sleepness: 100,
          }
        };
        const service = new Service({ state });
        expect(service.evaluateHappiness()).toBe(-1);
      });
      it('should return 0', () => {
        const state = {
          started: false,
          health: 15,
          happiness: {
            total: 60,
            hunger: 10,
            boredom: 100,
            dirtness: 100,
            sleepness: 100,
          }
        };
        const service = new Service({ state });
        expect(service.evaluateHappiness()).toBe(0);
      });
      it('should return 1', () => {
        const state = {
          started: false,
          health: 15,
          happiness: {
            total: 80,
            hunger: 10,
            boredom: 100,
            dirtness: 100,
            sleepness: 100,
          }
        };
        const service = new Service({ state });
        expect(service.evaluateHappiness()).toBe(1);
      });
    });
});

/*
total 0 - 50 => health --
total 51 -75 => health =
total 76 - 100 => health ++

total = (hunger + boredom + dirtness + sleepness)/4
*/
