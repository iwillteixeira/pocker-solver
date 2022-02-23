export class Solver { // eslint-disable-line

    checkSequence = (array) => {
      let rep = false;
      for (let i = 0; i < array.length; i += 1) {
        let count = 1;
        for (let j = i + 1; j < array.length; j += 1) {
          if (array[j] - array[i] === count) {
            count += 1;

            if (count === 5) {
              rep = true;
            }
          }
        }
      }
      return rep;
    }

    rankHand = (straight, flush, duplicates) => {
      this.rank = (flush && straight && 1)
                    || (duplicates[4] && 2)
                    || (duplicates[3] && duplicates[2] && 3)
                    || (flush && 4)
                    || (straight && 5)
                    || (duplicates[3] && 6)
                    || (duplicates[2] > 1 && 7)
                    || (duplicates[2] && 8)
                    || 9;
      return this.rank;
    }

    checkFlush(suits) {
      this.flush = suits[0] === suits[4]
                || suits[1] === suits[5]
                || suits[2] === suits[6]
                || suits[3] === suits[7];
      return this.flush;
    }

    switchRank(rank, value) {
      this.result = [];
      switch (rank) {
        case 2:
          this.result = value.slice(0, 4).join('');
          break;

        case 3:
          this.result = value.slice(0, 5).join('');
          break;

        case 6:
          this.result = value.slice(0, 3).join('');
          break;

        case 7:
          this.result = value.slice(0, 4).join('');
          break;

        case 8:
          this.result = value.slice(0, 2).join('');
          break;

        default:
          this.result = value.join('');
          break;
      }
      return this.result;
    }

    count = (c, a) => {
      c[a] = (c[a] || 0) + 1;
      return c;
    };

    getSuits=(b) => b.filter((e) => e.charCodeAt() >= 97).sort()

    getFaces = (b) => b.map((x) => x.replace('T', '10').replace('J', '11').replace('Q', '12').replace('K', '13')
      .replace('A', '14')).sort((a, b) => a - b).filter((e) => e > 0);

    cardDealFive(a, index) {
      const b = a.split('');
      const face = this.getFaces(b);
      const suits = this.getSuits(b);
      const flush = this.checkFlush(suits);
      const first = face[0];
      const straight = face.every((f, index) => f - first === index);
      const counts = face.reduce(this.count, {});
      const duplicates = Object.values(counts).reduce(this.count, {});
      const rank = this.rankHand(straight, flush, duplicates);

      const byCountFirst = (a, b) => {
        let result;
        const countDiff = counts[b] - counts[a];
        if (countDiff) return countDiff;
        if (b > a) result = -1;
        else if (b === a) result = 0;
        else result = 1;
        return result;
      };

      const value = face.sort(byCountFirst).join('');
      const objectCard = {
        hand: index, rank, cards: a, value, score: value,
      };

      return objectCard;
    }

    cardDealTexas(a, index, board) {
      this.twoCards = a;
      let score = 0;

      a += board[0];
      const b = a.split('');
      let face = this.getFaces(b);

      score = face.slice(0, 2).sort((a, b) => b - a).join('');
      face = face.sort((a, b) => a - b);
      const suits = this.getSuits(b);
      const flush = this.checkFlush(suits);
      const first = face[0];
      const straight = face.every((f, index) => f - first === index);
      const counts = face.reduce(this.count, {});
      const duplicates = Object.values(counts).reduce(this.count, {});

      const byCountFirst = (a, b) => {
        const countDiff = counts[b] - counts[a];
        let result;
        if (countDiff) return countDiff;
        if (countDiff) return countDiff;
        if (b > a) result = -1;
        else if (b === a) result = 0;
        else result = 1;
        return result;
      };

      const value = face.sort(byCountFirst);
      const rank = this.rankHand(straight, flush, duplicates);
      this.valueReduced = this.switchRank(rank, value);

      const objectCard = {
        hand: index, rank, cards: this.twoCards, value: this.valueReduced, score,
      };

      return objectCard;
    }

    cardDealOmaha(a, index, board) {
      this.fourCards = a;
      let score = 0;

      a += board[0];

      const b = a.split('');

      let face = this.getFaces(b);
      score = face.slice(0, 2).sort((a, b) => b - a).join('');

      face = face.sort((a, b) => a - b);
      const suits = this.getSuits(b);

      const faceUnique = [...new Set(face)];
      const flush = this.checkFlush(suits);
      const straight = this.checkSequence(faceUnique);

      const counts = face.reduce(this.count, {});
      const duplicates = Object.values(counts).reduce(this.count, {});

      const byCountFirst = (a, b) => {
        const countDiff = counts[b] - counts[a];
        let result;
        if (countDiff) return countDiff;
        if (countDiff) return countDiff;
        if (b > a) result = -1;
        else if (b === a) result = 0;
        else result = 1;
        return result;
      };

      const value = face.sort(byCountFirst);
      const rank = this.rankHand(straight, flush, duplicates);
      this.valueReduced = this.switchRank(rank, value);

      const objectCard = {
        hand: index, rank, cards: this.fourCards, value: this.valueReduced, score,
      };

      return objectCard;
    }

    outputString(hands) {
      let output = '';

      this.sizeHands = hands.length;
      for (let i = 0; i < this.sizeHands; i += 1) {
        output = `${output} ${hands[i].cards}`;
        for (let j = i + 1; j < this.sizeHands; j += 1) {
          if (hands[i].rank === hands[j].rank
            && hands[i].value === hands[j].value
            && hands[i].score === hands[j].score) {
            output = `${output}=${hands[j].cards}`;
            i += 1;
          }
        }
      }

      return output.trim();
    }

    process(line) {
    // TODO Implement correct solution logic
      const input = line.split(' ');
      const obj = [];
      let hands = [];
      let board = [];
      switch (input[0]) {
        case 'five-card-draw':
          hands = input.slice(1, input.length);
          hands.forEach((e, i) => {
            obj.push(this.cardDealFive(e, i));
          });
          break;
        case 'omaha-holdem':
          hands = input.slice(2, input.length);
          board = input.slice(1, 2);
          hands.forEach((e, i) => {
            obj.push(this.cardDealOmaha(e, i, board));
          });

          break;
        case 'texas-holdem':
          hands = input.slice(2, input.length);
          board = input.slice(1, 2);
          hands.forEach((e, i) => {
            obj.push(this.cardDealTexas(e, i, board));
          });
          break;
        default:
          console.log('Please Input a poker game type');
      }

      const newArr = obj.map((e) => e).sort((a, b) => b.rank - a.rank
                                            || a.value - b.value
                                            || a.score - b.score);

      return this.outputString(newArr);
    }
}

const solver = new Solver();
solver.process('texas-holdem 3d4s5dJsQd 5c4h 7sJd KcAs 9h7h 2dTc Qh8c TsJc');
