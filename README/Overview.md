This is a note of my project during my time as a Summer Intern at IISER Pune under Dr. Leelavati Narlikar. 
The purpose of this note is to setup the problem I've worked on, explain my outputs and code and reflect my thinking process.

## The Project
IISER Pune and NCL are collaborating on a big project to study a family of  transcription factors called GATA. During my time there, I worked specifically on the transcription factor called GATA3. My job was to find out the binding sites of GATA3 in different lineages of T cells in mice.

## The Experiment
A group of scientists had conducted a CHIP-Seq experiment on different lineages of T cell populations of mice. This was done to find out the binding sites of GATA3. The CHIP Seq only narrows down the binding site region to a resolution of +/- 200 bp approximately. 
You can read more about CHIP Sequencing [here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiGsfuIrt6AAxXySmwGHadxA0cQFnoECDAQAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChIP_sequencing&usg=AOvVaw3ZGSEv3BpPKG1bUjqnc3xa&opi=89978449).

In addition to this, they have made some analysis with the help of the CHIP - Sequencing Data. I am adding only the inferences here ; for a more deeper understanding, kindly read [the paper](https://www.sciencedirect.com/science/article/pii/S1074761311003128).

### Inferences
- The number of binding sites in a T cell type appears to be related to the amounts of GATA3 expression
- GATA3 binding exhibits marked cell specificity, although there are substantial overlaps of binding sites among different cells.
- Deletion of GATA 3 resulted in the change in the expression of some genes, and also change in the number of genes expressed in the cells.
- This suggests GATA3-mediated gene regulation in different cell types requires cell type-specific co factors.
- GATA3 motifs were associated with some ETS motifs and FL1 motifs.One can assume GATA3 binding may be affected by this family proteins and vice versa. It was suggested that transcription factors exhibit different target specificity depending on the existence of co-occurring motifs.

## My Job

[Motif Enrichment Analysis](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-11-165) was employed by the scientists in the paper to figure out the binding sites. I employed a different algorithm called [cisDIVERSITY](https://genome.cshlp.org/content/31/9/1646.abstract), which is better at finding secondary motifs, like in our case. After finding the motifs, I also did some small analysis on the output data.





