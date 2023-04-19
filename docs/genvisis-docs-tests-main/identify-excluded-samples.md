## Identify Excluded Samples

This option loads **lrr_sd.xln** and filters out low quality samples.

#### 1: Compute Sample QC Metrics step [sample-qc] must have been run already or must be selected

#### 2: LRR SD Threshold
The default value is 0.32. For Phase 2 (SNP) analysis, set to 0.5 for SNP analysis. FOr Phase 3 (CNV) analysis, use the default value of 0.32.

#### 3: Callrate Threshold
The default value is 0.95. Use 0.98 for Illumina data and 0.95 for Affymetrix data.

#### 4: BAF SD Threshold Multiplier
The default value is 3, which is appropriate for most projects.

#### 5: (optional) File of additional samples to exclude regardless of quality
