const DNAStrand = (dna) =>
  dna.split("").map(symbol =>
    (symbol == "T") ? "A" :
      (symbol == "A") ? "T" :
      (symbol == "G") ? "C" : "G")
  .join("");

const DNAStrandRegexPairs = (dna) =>
  dna.replace(/./g, (symbol) => DNAStrandRegexPairs.pairs[symbol]);

DNAStrandRegexPairs.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
}