export const PAPER_URL = "https://arxiv.org/abs/2510.18212";
export const GITHUB_URL = "";
export const TWEET_URL = "https://x.com/DanHendrycks/status/1978828377269117007";

export const BIBTEX_CITATION = `@misc{hendrycks2025definitionagi,
      title={A Definition of AGI}, 
      author={Dan Hendrycks and Dawn Song and Christian Szegedy and Honglak Lee and Yarin Gal and Erik Brynjolfsson and Sharon Li and Andy Zou and Lionel Levine and Bo Han and Jie Fu and Ziwei Liu and Jinwoo Shin and Kimin Lee and Mantas Mazeika and Long Phan and George Ingebretsen and Adam Khoja and Cihang Xie and Olawale Salaudeen and Matthias Hein and Kevin Zhao and Alexander Pan and David Duvenaud and Bo Li and Steve Omohundro and Gabriel Alfour and Max Tegmark and Kevin McGrew and Gary Marcus and Jaan Tallinn and Eric Schmidt and Yoshua Bengio},
      year={2025},
      eprint={2510.18212},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2510.18212}, 
}`;

export const AUTHORS = {
  firstLine: [
    { name: "Dan Hendrycks", sup: "1", link: "https://people.eecs.berkeley.edu/~hendrycks/" },
    { name: "Dawn Song", sup: "2", link: "https://people.eecs.berkeley.edu/~dawnsong/" },
    { name: "Christian Szegedy", sup: "3", link: "https://scholar.google.com/citations?user=bnQMuzgAAAAJ&hl=en" },
    { name: "Honglak Lee", sup: "4,5", link: "https://web.eecs.umich.edu/~honglak/" },
    { name: "Yarin Gal", sup: "6", link: "https://www.cs.ox.ac.uk/people/yarin.gal/" },
  ],
  secondLine: [
    { name: "Erik Brynjolfsson", sup: "7", link: "https://www.brynjolfsson.com/" },
    { name: "Sharon Li", sup: "8", link: "https://pages.cs.wisc.edu/~sharonli/" },
    { name: "Andy Zou", sup: "1,9,10", link: "https://andyzoujm.github.io/" },
    { name: "Lionel Levine", sup: "11", link: "https://pi.math.cornell.edu/~levine/" },
    { name: "Bo Han", sup: "12", link: "https://bhanml.github.io/" },
    { name: "Jie Fu", sup: "13", link: "https://bigaidream.github.io/" },
    { name: "Ziwei Liu", sup: "14", link: "https://liuziwei7.github.io/" },
  ],
  thirdLine: [
    { name: "Jinwoo Shin", sup: "15", link: "https://alinlab.kaist.ac.kr/shin.html" },
    { name: "Kimin Lee", sup: "15", link: "https://sites.google.com/view/kiminlee" },
    { name: "Mantas Mazeika", sup: "1", link: "https://scholar.google.com/citations?user=fGeEmLQAAAAJ&hl=en" },
    { name: "Long Phan", sup: "1", link: "https://longphan.ai/" },
    { name: "George Ingebretsen", sup: "1", link: "" },
  ],
  fourthLine: [
    { name: "Adam Khoja", sup: "1", link: "" },
    { name: "Cihang Xie", sup: "16", link: "https://cihangxie.github.io/" },
    { name: "Olawale Salaudeen", sup: "17", link: "https://www.olawalesalaudeen.com" },
    { name: "Matthias Hein", sup: "18", link: "https://scholar.google.com/citations?user=0ZAb3tsAAAAJ&hl=en" },
    { name: "Kevin Zhao", sup: "19", link: "https://homes.cs.washington.edu/~kwzhao/" },
  ],
  fifthLine: [
    { name: "Alexander Pan", sup: "2", link: "https://aypan17.github.io/" },
    { name: "David Duvenaud", sup: "20,21", link: "https://www.cs.toronto.edu/~duvenaud/" },
    { name: "Bo Li", sup: "22", link: "https://aisecure.github.io/" },
    { name: "Steve Omohundro", sup: "23", link: "https://steveomohundro.com/" },
    { name: "Gabriel Alfour", sup: "24", link: "" },
  ],
  sixthLine: [
    { name: "Max Tegmark", sup: "17", link: "https://scholar.google.com/citations?user=eBXEZxgAAAAJ&hl=en" },
    { name: "Kevin McGrew", sup: "25", link: "https://scholar.google.com/citations?user=mQ7AnEQAAAAJ&hl=en" },
    { name: "Gary Marcus", sup: "26", link: "https://x.com/GaryMarcus" },
    { name: "Jaan Tallinn", sup: "27", link: "https://jaan.info" },
  ],
  seventhLine: [
    { name: "Eric Schmidt", sup: "17", link: "https://x.com/ericschmidt" },
    { name: "Yoshua Bengio", sup: "28,29", link: "https://yoshuabengio.org/" },
  ]
};

export const AFFILIATIONS = [
  { sup: "1", name: "Center for AI Safety" },
  { sup: "2", name: "University of California, Berkeley" },
  { sup: "3", name: "Morph Labs" },
  { sup: "4", name: "University of Michigan" },
  { sup: "5", name: "LG AI Research" },
  { sup: "6", name: "University of Oxford" },
  { sup: "7", name: "Stanford University" },
  { sup: "8", name: "University of Wisconsin–Madison" },
  { sup: "9", name: "Gray Swan AI" },
  { sup: "10", name: "Carnegie Mellon University" },
  { sup: "11", name: "Cornell University" },
  { sup: "12", name: "Hong Kong Baptist University" },
  { sup: "13", name: "HKUST" },
  { sup: "14", name: "Nanyang Technological University" },
  { sup: "15", name: "KAIST" },
  { sup: "16", name: "University of California, Santa Cruz" },
  { sup: "17", name: "Massachusetts Institute of Technology" },
  { sup: "18", name: "University of Tübingen" },
  { sup: "19", name: "University of Washington" },
  { sup: "20", name: "University of Toronto" },
  { sup: "21", name: "Vector Institute" },
  { sup: "22", name: "University of Chicago" },
  { sup: "23", name: "Beneficial AI Research" },
  { sup: "24", name: "Conjecture" },
  { sup: "25", name: "Institute for Applied Psychometrics" },
  { sup: "26", name: "New York University" },
  { sup: "27", name: "CSER" },
  { sup: "28", name: "Université de Montréal" },
  { sup: "29", name: "LawZero" },
];
