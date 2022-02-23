import { Solver } from '../solver';

const solver = new Solver();

describe('Omaha Holdem Tests', () => {
  it('Test Oh 5c6dAcAsQs', () => {
    expect(solver.process('omaha-holdem 5c6dAcAsQs TsQh9hQc 8d7cTcJd 5s5d7s4d Qd3cKs4c KdJs2hAh Kh4hKc7h 6h7d2cJc')).toEqual('8d7cTcJd 6h7d2cJc Qd3cKs4c Kh4hKc7h KdJs2hAh 5s5d7s4d TsQh9hQc');
  });

  it('Test Oh 3d4s5dJsQd', () => {
    expect(solver.process('omaha-holdem 3d4s5dJsQd 8s2h6s8h 7cThKs5s 5hJh2s7d 8d9s5c4h 7sJdKcAs 9h7h2dTc Qh8cTsJc')).toEqual('9h7h2dTc 7cThKs5s 7sJdKcAs 8d9s5c4h 5hJh2s7d Qh8cTsJc 8s2h6s8h');
  });

  it('Test Oh 3d3s4d6hJc', () => {
    expect(solver.process('omaha-holdem 3d3s4d6hJc Js2dKd8c KsAsTcTs Jh2h3c9c Qc8dAd6c 7dQsAc5d')).toEqual('Qc8dAd6c KsAsTcTs Js2dKd8c 7dQsAc5d Jh2h3c9c');
  });
});
