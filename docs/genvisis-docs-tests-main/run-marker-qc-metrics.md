### Run Marker QC Metrics
    * **data/pedigree.txt** must have correctly identified parent-offspring pairs before running this step.
        * Genvisis generated relationship data can be found in **[ProjectDir]/plink/quality_control_original/genome/plink.genome_relateds.xln**
    * Marker QC can be done on a subset of markers, but the default is to use all markers
    * Option 4 allows batch effects to be controlled for in the analysis
        * If you submitted a batch file at project creation or in the **Create SampleData.txt File** step, **BATCH **will appear as one of the options that can be selected.
