### Run GWAS QC

This step runs the PLINK software on the files created in Step 12. It requires a path to a PLINK executable. This could be plink, plink 1.9, or plink2 depending on what version of PLINK you are running.

The threshold to reject Marker Callrate has a default value of **&lt;0.98** in Illumina projects and **&lt;0.95** in Affymetrix projects.

The threshold for filtering on Sample Callrate has a default value of **0.95**.
- Change to **0.98** for Illumina data.
- Leave at **0.95** for Affymetrix.
