## Call CNVs

#### 1.1 Hidden Markov Model (HMM) File Must Exist
The HMM looks for change states; a change in intensity may indicate a deletion or a duplication.

The model parameters (mean and standard deviation values that indicate the number of copies of an allele) are stored in an **.hmm** file. Genvisis automatically downloads **.genvisis/resources/CNV/hhall.hmm**, which is the default model. Another option is **hh550.hmm**, which is for the Illumina 550 array. (The PennCNV algorithm was originally written for the 550 array; Genvisis uses the same CNV calling algorithm as PennCNV.) A third option is the **.hmm** file created in **Step 21: Process CNVs and Create HMM File**, which can be used here to call CNVs a second time with an **.hmm** file that is customized to the dataset (the **Create HMM File** step also has an option to recall CNVs automatically).

B1 is for the log R ratio and B2 is for the B allele frequency. Values were derived empirically from an array.

| For copy number | Value in **hhall.hmm** | Value in **hh550.hmm** |
| :--- | ---: | ---: |
| 0 (homozygous deletion) | -3.5 | -3.5 |
| 1 | -0.66 | -0.66 |
| 2 heterozygous | 0 | 0 |
| 2 homozygous | 100 | 0.0 |
| 3 (duplication) | 0.4 | 0.4 |
| 4 (triplication) | 0.68 | 0.68 |

In **hhall.hmm**, copy number 2 homozygous is turned off by being set to 100 because values that large will never be seen.

#### 1.2 Use locally available array-specific Hidden Markov Model resource file

#### 2.1 Computer Population BAF Files step [compute-pfb] must have been run already or must be selected

#### 2.2 PFB File Must Exist

#### 3.1 Comptuer GCMODEL File step [gcmodel] must have been run already or must be selected

#### 3.2 GCMODEL File Must Exist

#### 4 CNV Calling Scope
* AUTOSOMAL: Chromosomes 1 to 22
* SEX CHROMOSOMES: Chromosomes 23 (X) and 24 (Y)
* BOTH (default): Calls AUTOSOMAL and SEX CHROMOSOMES

#### 5 (optional) If calling chromosomal CNVs, use sex-specific centroids to recalculate LRR/BAF values?

#### 6.1 (optional) Use Genvisis-generated list of markers to ignore (if it exists)

#### 6.2 (optional) File of problematic or dropped markers to ignore in CNV calling

#### 7 Number of threads

#### 8 Output filename (must not already exist)
