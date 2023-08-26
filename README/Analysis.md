## GATA Favour

The idea was that GATA and its associated motifs would be binding more strongly to the protein than other junk motifs.

To check this one had to look at all the bedgraph regions that contributed to the motif and collect the enrichment value. Enrichment value was a measure of the strength of binding of the protein during the CHIP Sequencing experiment.

Once we have all the enrichment values for each of the motifs, a box plot is made.

If there is a GATA favour, the median values of those motifs would be higher than that of other motifs.

But, all the medians were close enough to each other and there was no significant difference.

The boxplots are located at Files/Output/Plots/Boxplot

## p-values

The regions that contribute to GATA and its associated motifs in a particular cell type, can be found overrepresented in other cell types.
These regions may be occurring due to random chance in other cell types , But if that is not the case, one could argue that the GATA protein has an affinity for the motif GATA and the other secondary motifs.

How to check if the regions are overrepresented by random chance?

Let's call the cell type with the motif as C0 and the cell type in which  we are checking for overrepresentation as C1.

We'll take all the regions of  C0 and compare the matches with C1.(background)
Then we'll take all the regions belonging to the motif in C0 and and compare the matches with C1.

Then we'll calculate the probability of the motif regions occurring by random chance given the background regions.

To make the idea clear, lets use balls.
Assume I have a bag with M white balls and N black balls. Suppose I take K  balls during a draw without  replacement, and I find that I have x black balls. What is the probability of getting this x black balls?

This probability is called the p-value.
A p-value of < 0.05 indicates over/under representation.

The p-values for each motif of each cell type are located at Files/Outputs/ P Values.

The over represented motifs are located at the folder labelled Interesting.
One can see that these motifs are either GATA or it's associated motifs.

## Motif-Gene Matches

Suppose one could find a way to compare motifs across cell types and find matches. This would mean comparing position weight matrices and finding ones that are more or less similar.

The scientists who wrote the paper mentioned in [[Overview]] also did experiments to find out genes that are common to the cell types activated by GATA. 

One hypothesis could be that cell types with more common motifs would have more common activated genes.

The method used for finding similar motifs is by employing Jensen- Shannon distance. You can read about it [here](https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence).

I could not find a reasonable relationship between the two. This may be because:
1. The no of common genes activated between two cell types is much less compared to their individual values.
2. The no of common genes are all around the same number.
3. The no of common motifs is also around the same number. So it's hard to see a pattern or a connection between the two.

## Universal GATA

The idea of a Universal GATA is to combine all the PSSM of the all different GATA motifs identified across all lineages.

The frequencies are averaged across the lineages and a new sequence logo is created representing the Universal GATA motif. 














