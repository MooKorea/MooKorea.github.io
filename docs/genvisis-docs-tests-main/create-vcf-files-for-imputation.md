### Create VCF Files for Imputation
    * Export project data in the form of .vcf files that can be imputed on the [TOPMed Imputation Server](https://docs.google.com/document/d/1BMu1zp8er9NY-QFRh-7ZOeX1HnGj_yAYYh3BarASwPY/edit?pli=1#bookmark=kix.ao1b7evi7f7z).
    * 1: Chose which samples to export
        * 1.1: All samples
        * 1.2: A file of FID/IIDs to keep
            * If you want to keep samples regardless of ancestry or quality control
        * 1.3: A file of FID/IIDs to drop
            * **plink/quality_control/further_analysis_QC/mind_drops.dat**
        * 1.4: Drop samples Genvisis identified in [Identify Excluded Samples](#bookmark=id.izzeb0pvdf4q)
    * 2: Choose which markers to export
        * 2.1 A file with markers to keep
        * 2.2 A file with markers to drop
            * **plink/quality_control/further_analysis_QC/miss_drops.dat**
    * 3: (optional) Export contig names with ‘chr’ prefix (**HG**) or without (**GRC**)
        * Use **HG** or data with **GRCh38/hg38** positions (which will encode chromosomes with the prefix 'chr'; e.g. chr20).
        * Use **GRC** or data with **GRCh37/hg19** positions (which will encode chromosomes without a prefix; e.g. 20). 
        * If the manifest was in **hg19**, but you lifted **markerPositions.txt** to **hg38**, use the **HG** ption.
    * 4: Chromosomes to export
        * Options are:
            * 0: Unknown
            * 1 to 22: autosomes
            * 23: X
            * 24: Y
            * 25: Pseudoautosomal region or XY
            * 26: Mitochondrial 
        * The TOPMed Imputation Server will only accept chromosomes 1 to 23.
    * 5: Split by chromosome?
        * If yes, will export one file per chromosome
        * Otherwise, will export all chromosomes in a single file
    * 6: (optional) Use ClusterFilters when exporting (if they exist)?
        * ClusterFilters are created through [ScatterPlot ](#bookmark=id.9sahd1n5px3d)as a way to re-assign genotypes for specific markers
    * 7: Output file path (relative to project directory) and filename prefix for VCF files
