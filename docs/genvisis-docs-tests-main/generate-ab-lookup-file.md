### Generate AB Lookup File

This step parses the AB alleles from the original genotype. For each of the variants, it matches what nucleotide it predicts the A allele is and what nucleotide the B allele is to determine what is the reference allele and what is the alternate allele.

Requires **Parse Sample Files** to have been run.

Will use **Marker BLAST Annotations** if they are available.

Has the option to take the **SNP_Map.csv** file that GenomeStudio creates with the report files. **SNP_Map.csv** is used only in the rare scenario where you have neither probe sequences nor a blast.vcf file. When Genvisis generates a lookup from existing ACGT genotypes and then reclusters a monomorphic marker, the only way to determine the other allele is with **SNP_Map.csv** or a similar file.
