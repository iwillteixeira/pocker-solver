import { Solver } from '../solver'

const solver = new Solver();

describe("Texas Holdem Tests", () => {

    it("Test Th 5c6dAcAsQs", () => {
        expect(solver.process('texas-holdem 5c6dAcAsQs Ks4c KdJs 2hAh Kh4h Kc7h 6h7d 2cJc')).toEqual('2cJc Kh4h=Ks4c Kc7h KdJs 6h7d 2hAh');
    });

    it("Test Th 2h5c8sAsKc", () => {
        expect(solver.process('texas-holdem 2h5c8sAsKc Qs9h KdQh 3cKh Jc6s')).toEqual('Jc6s Qs9h 3cKh KdQh');
    });

    it("Test Th 3d4s5dJsQd", () => {
        expect(solver.process('texas-holdem 3d4s5dJsQd 5c4h 7sJd KcAs 9h7h 2dTc Qh8c TsJc')).toEqual('9h7h 2dTc KcAs 7sJd TsJc Qh8c 5c4h');
    });

});