## Extracting the Sequences

The CHIP Sequencing data from the paper mentioned in [[Overview]] is available [here](https://genome.cshlp.org/content/31/9/1646.abstract).

The data is available as a .bedgraph file. It's a table with the four entries: chromosome number, start position , end position and a number to indicate the strength of binding.

But cisDIVERSITY runs on actual DNA regions(a file format called FASTA). My first step was to download the complete mouse genome (mm8 : the mouse genome used in the experiment) from the UCSC Genome library.[link](https://hgdownload.soe.ucsc.edu/goldenPath/mm8/bigZips/mm8.2bit)

The required DNA Regions were then extracted from the complete genome using a UCSC Genome Tool called TwoBitToFa.[link](https://anaconda.org/bioconda/ucsc-twobittofa)

The extracted .fasta files are located at Files/Processed/fafiles

### Masking

While extracting the DNA files, one can choose to mask the regions if the DNA that are repetitive.
This is done to avoid the presence of junk motifs in the output produced by cisDIVERSITY.

The masked .fasta files are located at Files/Processed/masked

### Summit

Once can also extract DNA regions by limiting the  base pairs to +/- 100 of the midpoint of the region. 

The reason for doing so is that the maximum binding strength reading from CHIP Sequencing would be found at the midpoint of the region.

Such files with the limited regions are located at Files/Processed/summit

## Running cisDIVERSITY

The outputs after running cisDIVERSITY on the .fasta files are located at Files/Outputs

The summit outputs are in the Summit Folder and masked outputs are in the Masked folder.

For a clean, concise  view of the output, open the cisDIVERSITY html file present in the respective output folders.
The html file shows the sequence logos of all the motifs, their number of appearances, different modules and their composition.