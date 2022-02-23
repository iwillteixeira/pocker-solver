# Poker Hand Strength Evaluator

## Description

This is an algorithm for sorting poker hands according to their strength.
There are three possible game types: [Five-Cards, Texas-Holdem, Omaha-Holdem].

I Developed this algorithm using vanilla js and testing with Jest.

### Setup

1. Open a command line
2. Clone the project to your computer with `git clone git@github.com:codescreen/CodeScreen_rhekjzg1`
3. Go into the folder to the project with `cd React-covid`
4. Build the node modules with `npm install`. 

### Poker Games

* Texas Hold'em - input is a board of 5 cards, and multiple hands of 2 cards each.

  A value of a Texas Hold'em hand is the best possible value out of all possible subsets of
  5 cards from the 7 cards which are formed by 5 board cards and 2 hand cards.


* Omaha Hold'em - input is a board of 5 cards, and multiple hands of 4 cards each.

  A value of an Omaha Hold'em hand is the best possible value out of all possible 5 card combinations
  which are formed from 3 out of 5 board cards and 2 out of 4 hand cards.


* Five Card Draw - input is multiple hands of 5 cards each.

  A value of a Five Card Draw hand is the value of the 5 hand cards.



### Hand Value

The hand values for 5 cards are as follows (in descending order - from strongest to weakest):

* `Straight Flush` - a `Straight` (see below) which is also a `Flush` (see below)
* `Four of a kind` - Four cards of the same rank
* `Full House` - a combination of `Three of a kind` and a `Pair`
* `Flush` - 5 cards of the same suit
* `Straight` - a sequence of 5 cards of consecutive rank (note an exception - `A` can both precede `2` and follow `K`)
* `Three of a kind` - three cards with the same rank
* `Two pairs` - two `Pair`-s
* `Pair` - two cards of the same rank
* `High card` - the "fallback" in case no other hand value rule applies

## Testing


All the unit tests in [texas.holdem.solver.spec.js](tests/texas.holdem.solver.spec.js), [omaha.holdem.solver.spec.js](tests/omaha.holdem.solver.spec.js), and
 [five.card.draw.solver.spec.js](tests/five.card.draw.solver.spec.js)



### Requirements for Implementation

Include a `ReadMe.md` file which documents all known limitations of your solution, in terms of functionality
implemented, known defects, or considerations how to build and run it.

The code, comments and documentation should be in English.

Your solution must use/be compatible with `Node.js` version `15.5.1`.

## Author

👤 **Will Teixeira**

- GitHub: [@githubhandle](https://github.com/iwillteixeira)
- Twitter: [@twitterhandle](https://twitter.com/iwillteixeira)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/juscelinodev/)
