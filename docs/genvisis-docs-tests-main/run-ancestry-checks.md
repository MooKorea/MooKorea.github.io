### Run Ancestry Checks

This step performs homogeneity tests to make sure that the analysis doesn’t pick up on allele frequency differences simply due to the array being used.

1: Run GWAS QC Step must have been run or must be selected.

2.1: If you have self-described ancestry, you can include a list of white samples to compare with HapMap samples that are used as anchors. HapMap contains 60 unrelated individuals of European descent, 60 unrelated individuals of Nigerian descent, and 90 unrelated individuals of east Asian descent (45 Japanese and 45 Chinese).

2.2: If you don’t have self described ancestry, you can instead check the box for part 2.2. Genvisis will estimate which samples have European ancestry and then use the list it generates as putative whites.

3: Download remotely available PLINK root of HapMap founders.

4: Should use the same PLINK version used in Run GWAS QC.

5 (optional): Used when SNPs aren’t labeled with rsIDs but you have a mapping file to identify what rsIDs they align to. HapMap uses only rsID, so if you have no samples with rsIDs, this part is required. Any samples without rsID will be ignored in this part of the analysis.
