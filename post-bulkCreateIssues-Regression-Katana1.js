{
    "issueUpdates": [
    {
        "update": {},
        "fields": {
            "project": {
                "id": "13280"
            },
            "summary": "Regression in PI 8 Planning Sprint (174-176) for Sp173 - Katana BAU",
            "issuetype": {
                "id": "3"
            },
            "reporter": {
              "name": "cpearson",
              "key": "cpearson",
              "emailAddress": "cpearson@silverchair.com"
            },
            "labels": [
                "sqa",
                "platform_other"
            ],
            "description": "{panel:borderStyle=solid|title=Sprint Regression Testing - Katana |titleBGColor=#9AD1D4|bgColor=#CCDBDC}\r\n\r\nh5. Sprint Regression Testing \r\nPotential points of risk, regression:\r\n* Book loading: \r\n** New books \r\n** Unpublished replacements\r\n** Published replacements\r\n* Zipline 3 workflow\r\n** OUP (with the Content Amalgamator OxMeta\r\n** Non-OUP (GSW, DUP, IWA)\r\n* S3 archiving for books (Note:  SCMP-10682)\r\n\r\nh1. Regression testing needed?\r\n||Org Representation|| Yes/No || Notes ||\r\n|Developers|  | |\r\n|SQA| (/) | |\r\n|ScrumMaster|  | |\r\n|Product Owner|  | |\r\n|Product Delivery Manager| | |\r\n\r\nh4. Decision - Regression Testing Needed: Yes/No\r\n\r\nh5. Platform Sync Up Requests\r\n||Team||JIRA||Area||Regression test Yes/No||TimeBox||\r\n|Team Katana|  |  |Yes|  |\r\n{panel}\r\n\r\n\r\n{panel:borderStyle=solid|title=Manual Regression *Testing* |titleBGColor=#9CC5A1|bgColor=#DCE1DE}\r\n||Area in Need of Regression Testing||Timebox||Notes||\r\n| Zipline 3 workflow, individual services |  |\r\n| Content API |  | \r\n| S3 Archives |  |\r\n| Radiate depositor services |  |\r\n| Published replacements (i.e., the swap) |  |\r\n| smUploaderSvc (Zipline 1 & 2) |  |\r\n| Semedica (Namely Tagmaster) |  |\r\n| Legacy deposits  |  |\r\n\r\n*Production FTP Endpoints and credentials*\r\n* (!) Ensure that all downstream deposit FTP endpoints and credentials are still valid.  To query for these values:  \r\n{code:sql}SELECT DISTINCT dt.name,dt.DefaultEndpoint,dc.[endpoint]\r\nFROM depositConfigs dc\r\n    JOIN depositTypes dt ON dc.DepositTypeId = dt.ID;\r\nGO{code}\r\n{code:sql}\r\nSELECT cm.name,cs.name,ccs.*\r\nFROM componentConfigSettings ccs\r\n    JOIN configSettings cs ON ccs.configSettingID = cs.configSettingID\r\n    JOIN components cm ON ccs.componentID = cm.componentID\r\nWHERE ccs.configSettingID = 41\r\n    AND cm.name LIKE '%DEPOSITORSERVICENAME%';\r\nGO{code}\r\n|| Deposit Service || URL || user || p/w || subdirectories || \r\n| PubMed (Issue/Article) | ftp://ftp-private.ncbi.nlm.nih.gov | silverchair | SPeXn3e4 | (root) |\r\n| PMC (Full/NIH) | ftp://ftp-private.ncbi.nlm.nih.gov | oup | Ko601btH | (root) |\r\n| PMC (Selective) | ftp://ftp-private.ncbi.nlm.nih.gov | oup | Ko601btH | /oup/oxfordopen |\r\n| RSuite (Issue/Article) | ftp://ukftp.oup.com/ | archive | 27iaSP | /pub/SC Feed |\r\n| ADS (Issue/Article) | ftp://adsftp.harvard.edu | anonymous | n/a | /pub/SilverChair |\r\n| CDS (Issue/Article) | ftp://cdsarc.u-strasbg.fr | mnras | FtpAccess,MNRAS! | (root) |\r\n| Ovid (Issue/Article) | ftp://producer.ovid.com | ftp075 | Gtdr2MzE | (root) |\r\n| Portico (Issue/Article) | ftp://ftp.portico.org | OUP | oupdata127 | Silverchair |\r\n| SCOAP3 | ftp://ukftp.oup.com | scoapuser2 | Ux$2FtP2 | /Silverchair |\r\n| AGI | ftp://ftp.georef.org/ | gsw | red7car | (root) |\r\n| EbscoArticle | ftp://192.73.31.75 | Duke | 1N38NJ7v | (root) |\r\n| Ebsco Books | ftp://mft.ebscohost.com | ftp6691 | dj+2kGfS9 | AHO ASM Handbooks Online |\r\n| Proquest | ftp://ftp.summon.serialssolutions.com | asm-primary | mvI4J5h4Nr | updates |\r\n\r\nh3. Full Zipline 3 Regression Testing Plan\r\n*Components* \r\n|| Component || Pass/Fail || Notes ||\r\n| oAuth (2.0) |  |  |\r\n| Workflow Service |  |  |\r\n| File Share (ssc-corpcontent) |  |  |\r\n| Package Validator |  |  |\r\n| Business Rule Validator (Journals) |  |  |\r\n| Business Rule Validator (Books) |  |  |\r\n| LoaderXSLT |  | Location: |\r\n| Zipline |  |  |\r\n| Asset Transformer |  |  |\r\n| Semantic Tagging |  |  |\r\n| Content Archiver |  |  |\r\n| Content Loading Data |  |  |\r\n| SCM6 Data (Journals) |  |  |\r\n| SCM6 Data (Books) |  |  |\r\n| S3 - Archive |  | Check media URLs |\r\n| S3 - Content Public |  |  |\r\n| S3 - Content Archive |  | Check sourceXml URLs |\r\n| Journals - Unpublished Replacements |  |  |\r\n| Journals - Published Replacements |  |  |\r\n| Books - Unpublished Replacements |  |  |\r\n| Books - Published Replacements |  |  |\r\n| Deposits - CrossRefBook |  |  |\r\n| Deposits - CrossRef |  |  |\r\n| Deposits - PMC-NIH |  |  |\r\n| Deposits - PMC-Full |  |  |\r\n| Deposits - PMC-Selective |  |  |\r\n\r\n\r\n*API*\r\n| GET Orphans |  |  |\r\n| Retry Submission |  |  |\r\n| Upload Taxonomy |  |  |\r\n| Trigger Deposit |  |  |\r\n| Renew Token |  |  |\r\n\r\n*UI* - Note that this will cover the majority of the API calls.  The ones not covered are listed in their own matrix, below.  \r\n| Upload - Page Load|  |  |\r\n| Upload - Choose Files|  |  |\r\n| Upload - Select Priority|  | (i) Priority setting doesn't work is a known defect |\r\n| Upload - Upload Files|  |  |\r\n| Package List -  Load |  |  |\r\n| Package List -  Pagination|  |  |\r\n| Package List -  List Size |  |  |\r\n| Package List -  Sorting |  |  |\r\n| Package List -  Filtering |  |  |\r\n| Package List -  Search |  |  |\r\n| Package Detail (Journals) -  Page Load |  |  |\r\n| Package Detail Journals -  Warnings |  |  |\r\n| Package Detail Journals -  Errors |  |  |\r\n| Package Detail Journals -  Publish|  |  |\r\n| Package Detail Journals -  Delete|  |  |\r\n| Package Detail Journals -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Package Detail Books -  Page Load |  |  |\r\n| Package Detail Books -  Warnings |  |  |\r\n| Package Detail Books -  Errors |  |  |\r\n| Package Detail Books -  Publish|  |  |\r\n| Package Detail Books -  Delete|  |  |\r\n| Package Detail Books -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Catalog List (Journals) -  Load |  |  |\r\n| Catalog List (Journals) -  Pagination|  |  |\r\n| Catalog List (Journals) -  List Size |  |  |\r\n| Catalog List (Journals) -  Sorting |  |  |\r\n| Catalog List (Journals) -  Filtering |  |  |\r\n| Catalog List (Journals) -  Search |  |  |\r\n| Catalog List (Journals) -  Publish/Unpublish |  |  |\r\n| Catalog List (Journals detail) -  Load |  |  |\r\n| Catalog List (Journals detail) -  Pagination|  |  |\r\n| Catalog List (Journals detail) -  List Size |  |  |\r\n| Catalog List (Journals detail) -  Publish/Unpublish |  |  |\r\n| Catalog List (Journals detail) -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Catalog List (Journals detail) -  Warning |  |  |\r\n| Catalog List (Journals detail) -  Error |  |  |\r\n| Catalog List (Books) -  Load |  |  |\r\n| Catalog List (Books) -  Pagination|  |  |\r\n| Catalog List (Books) -  List Size |  |  |\r\n| Catalog List (Books) -  Sorting |  |  |\r\n| Catalog List (Books) -  Filtering |  |  |\r\n| Catalog List (Books) -  Search |  |  |\r\n| Catalog List (Books) - Publish Book |  |  |\r\n| Catalog List (Books) - Expire Book |  |  |\r\n| Catalog List (Books) - Delete Book|  |  |\r\n| Catalog List (Books detail) -  Load |  |  |\r\n| Catalog List (Books detail) - Expand All |  |  |\r\n| Catalog List (Books detail) - Collapse All |  |  |\r\n| Catalog List (Books detail) -  Book status publish|  |  |\r\n| Catalog List (Books detail) -  Book status expire |  |  |\r\n| Catalog List (Books detail) -  Book status delete |  |  |\r\n| Catalog List (Books detail) -  Warning |  |  |\r\n| Catalog List (Books detail) -  Publish |  |  |\r\n| Catalog List (Books detail) -  Preview |  |  |\r\n| Catalog List (Books detail) -  Delete |  |  |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=Automated Regression *Testing* |titleBGColor=#458CD3|bgColor=#86BBD8}\r\n||Suite|| Yes/No|| TimeBox || Notes ||\r\n| [N/A] | No |  |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=Accessibility |titleBGColor=#AED9E0|bgColor=#BCF8EC}\r\n||Scan||Yes/No||TimeBox||\r\n| [N/A] | No | |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=SEO, Redirects, Crawls |titleBGColor=#9EE493|bgColor=#DAF7DC}\r\n||Scan||Yes/No||TimeBox||\r\n| [N/A] | No|  |\r\n{panel}",
            "customfield_11732": "SIS-1564",
            "customfield_13330": {
                "value": "Katana",
                "id": "13611"
            },
            "customfield_10013": 3,
            "customfield_10930": 2439
        }
    },
    {
        "update": {},
        "fields": {
            "project": {
                "id": "13280"
            },
            "summary": "Regression in Sp175 for Sp174 - Katana BAU",
            "issuetype": {
                "id": "3"
            },
            "reporter": {
              "name": "cpearson",
              "key": "cpearson",
              "emailAddress": "cpearson@silverchair.com"
            },
            "labels": [
                "sqa",
                "platform_other"
            ],
            "description": "{panel:borderStyle=solid|title=Sprint Regression Testing - Katana |titleBGColor=#9AD1D4|bgColor=#CCDBDC}\r\n\r\nh5. Sprint Regression Testing \r\nPotential points of risk, regression:\r\n* Book loading: \r\n** New books \r\n** Unpublished replacements\r\n** Published replacements\r\n* Zipline 3 workflow\r\n** OUP (with the Content Amalgamator OxMeta\r\n** Non-OUP (GSW, DUP, IWA)\r\n* S3 archiving for books (Note:  SCMP-10682)\r\n\r\nh1. Regression testing needed?\r\n||Org Representation|| Yes/No || Notes ||\r\n|Developers|  | |\r\n|SQA| (/) | |\r\n|ScrumMaster|  | |\r\n|Product Owner|  | |\r\n|Product Delivery Manager| | |\r\n\r\nh4. Decision - Regression Testing Needed: Yes/No\r\n\r\nh5. Platform Sync Up Requests\r\n||Team||JIRA||Area||Regression test Yes/No||TimeBox||\r\n|Team Katana|  |  |Yes|  |\r\n{panel}\r\n\r\n\r\n{panel:borderStyle=solid|title=Manual Regression *Testing* |titleBGColor=#9CC5A1|bgColor=#DCE1DE}\r\n||Area in Need of Regression Testing||Timebox||Notes||\r\n| Zipline 3 workflow, individual services |  |\r\n| Content API |  | \r\n| S3 Archives |  |\r\n| Radiate depositor services |  |\r\n| Published replacements (i.e., the swap) |  |\r\n| smUploaderSvc (Zipline 1 & 2) |  |\r\n| Semedica (Namely Tagmaster) |  |\r\n| Legacy deposits  |  |\r\n\r\n*Production FTP Endpoints and credentials*\r\n* (!) Ensure that all downstream deposit FTP endpoints and credentials are still valid.  To query for these values:  \r\n{code:sql}SELECT DISTINCT dt.name,dt.DefaultEndpoint,dc.[endpoint]\r\nFROM depositConfigs dc\r\n    JOIN depositTypes dt ON dc.DepositTypeId = dt.ID;\r\nGO{code}\r\n{code:sql}\r\nSELECT cm.name,cs.name,ccs.*\r\nFROM componentConfigSettings ccs\r\n    JOIN configSettings cs ON ccs.configSettingID = cs.configSettingID\r\n    JOIN components cm ON ccs.componentID = cm.componentID\r\nWHERE ccs.configSettingID = 41\r\n    AND cm.name LIKE '%DEPOSITORSERVICENAME%';\r\nGO{code}\r\n|| Deposit Service || URL || user || p/w || subdirectories || \r\n| PubMed (Issue/Article) | ftp://ftp-private.ncbi.nlm.nih.gov | silverchair | SPeXn3e4 | (root) |\r\n| PMC (Full/NIH) | ftp://ftp-private.ncbi.nlm.nih.gov | oup | Ko601btH | (root) |\r\n| PMC (Selective) | ftp://ftp-private.ncbi.nlm.nih.gov | oup | Ko601btH | /oup/oxfordopen |\r\n| RSuite (Issue/Article) | ftp://ukftp.oup.com/ | archive | 27iaSP | /pub/SC Feed |\r\n| ADS (Issue/Article) | ftp://adsftp.harvard.edu | anonymous | n/a | /pub/SilverChair |\r\n| CDS (Issue/Article) | ftp://cdsarc.u-strasbg.fr | mnras | FtpAccess,MNRAS! | (root) |\r\n| Ovid (Issue/Article) | ftp://producer.ovid.com | ftp075 | Gtdr2MzE | (root) |\r\n| Portico (Issue/Article) | ftp://ftp.portico.org | OUP | oupdata127 | Silverchair |\r\n| SCOAP3 | ftp://ukftp.oup.com | scoapuser2 | Ux$2FtP2 | /Silverchair |\r\n| AGI | ftp://ftp.georef.org/ | gsw | red7car | (root) |\r\n| EbscoArticle | ftp://192.73.31.75 | Duke | 1N38NJ7v | (root) |\r\n| Ebsco Books | ftp://mft.ebscohost.com | ftp6691 | dj+2kGfS9 | AHO ASM Handbooks Online |\r\n| Proquest | ftp://ftp.summon.serialssolutions.com | asm-primary | mvI4J5h4Nr | updates |\r\n\r\nh3. Full Zipline 3 Regression Testing Plan\r\n*Components* \r\n|| Component || Pass/Fail || Notes ||\r\n| oAuth (2.0) |  |  |\r\n| Workflow Service |  |  |\r\n| File Share (ssc-corpcontent) |  |  |\r\n| Package Validator |  |  |\r\n| Business Rule Validator (Journals) |  |  |\r\n| Business Rule Validator (Books) |  |  |\r\n| LoaderXSLT |  | Location: |\r\n| Zipline |  |  |\r\n| Asset Transformer |  |  |\r\n| Semantic Tagging |  |  |\r\n| Content Archiver |  |  |\r\n| Content Loading Data |  |  |\r\n| SCM6 Data (Journals) |  |  |\r\n| SCM6 Data (Books) |  |  |\r\n| S3 - Archive |  | Check media URLs |\r\n| S3 - Content Public |  |  |\r\n| S3 - Content Archive |  | Check sourceXml URLs |\r\n| Journals - Unpublished Replacements |  |  |\r\n| Journals - Published Replacements |  |  |\r\n| Books - Unpublished Replacements |  |  |\r\n| Books - Published Replacements |  |  |\r\n| Deposits - CrossRefBook |  |  |\r\n| Deposits - CrossRef |  |  |\r\n| Deposits - PMC-NIH |  |  |\r\n| Deposits - PMC-Full |  |  |\r\n| Deposits - PMC-Selective |  |  |\r\n\r\n\r\n*API*\r\n| GET Orphans |  |  |\r\n| Retry Submission |  |  |\r\n| Upload Taxonomy |  |  |\r\n| Trigger Deposit |  |  |\r\n| Renew Token |  |  |\r\n\r\n*UI* - Note that this will cover the majority of the API calls.  The ones not covered are listed in their own matrix, below.  \r\n| Upload - Page Load|  |  |\r\n| Upload - Choose Files|  |  |\r\n| Upload - Select Priority|  | (i) Priority setting doesn't work is a known defect |\r\n| Upload - Upload Files|  |  |\r\n| Package List -  Load |  |  |\r\n| Package List -  Pagination|  |  |\r\n| Package List -  List Size |  |  |\r\n| Package List -  Sorting |  |  |\r\n| Package List -  Filtering |  |  |\r\n| Package List -  Search |  |  |\r\n| Package Detail (Journals) -  Page Load |  |  |\r\n| Package Detail Journals -  Warnings |  |  |\r\n| Package Detail Journals -  Errors |  |  |\r\n| Package Detail Journals -  Publish|  |  |\r\n| Package Detail Journals -  Delete|  |  |\r\n| Package Detail Journals -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Package Detail Books -  Page Load |  |  |\r\n| Package Detail Books -  Warnings |  |  |\r\n| Package Detail Books -  Errors |  |  |\r\n| Package Detail Books -  Publish|  |  |\r\n| Package Detail Books -  Delete|  |  |\r\n| Package Detail Books -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Catalog List (Journals) -  Load |  |  |\r\n| Catalog List (Journals) -  Pagination|  |  |\r\n| Catalog List (Journals) -  List Size |  |  |\r\n| Catalog List (Journals) -  Sorting |  |  |\r\n| Catalog List (Journals) -  Filtering |  |  |\r\n| Catalog List (Journals) -  Search |  |  |\r\n| Catalog List (Journals) -  Publish/Unpublish |  |  |\r\n| Catalog List (Journals detail) -  Load |  |  |\r\n| Catalog List (Journals detail) -  Pagination|  |  |\r\n| Catalog List (Journals detail) -  List Size |  |  |\r\n| Catalog List (Journals detail) -  Publish/Unpublish |  |  |\r\n| Catalog List (Journals detail) -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Catalog List (Journals detail) -  Warning |  |  |\r\n| Catalog List (Journals detail) -  Error |  |  |\r\n| Catalog List (Books) -  Load |  |  |\r\n| Catalog List (Books) -  Pagination|  |  |\r\n| Catalog List (Books) -  List Size |  |  |\r\n| Catalog List (Books) -  Sorting |  |  |\r\n| Catalog List (Books) -  Filtering |  |  |\r\n| Catalog List (Books) -  Search |  |  |\r\n| Catalog List (Books) - Publish Book |  |  |\r\n| Catalog List (Books) - Expire Book |  |  |\r\n| Catalog List (Books) - Delete Book|  |  |\r\n| Catalog List (Books detail) -  Load |  |  |\r\n| Catalog List (Books detail) - Expand All |  |  |\r\n| Catalog List (Books detail) - Collapse All |  |  |\r\n| Catalog List (Books detail) -  Book status publish|  |  |\r\n| Catalog List (Books detail) -  Book status expire |  |  |\r\n| Catalog List (Books detail) -  Book status delete |  |  |\r\n| Catalog List (Books detail) -  Warning |  |  |\r\n| Catalog List (Books detail) -  Publish |  |  |\r\n| Catalog List (Books detail) -  Preview |  |  |\r\n| Catalog List (Books detail) -  Delete |  |  |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=Automated Regression *Testing* |titleBGColor=#458CD3|bgColor=#86BBD8}\r\n||Suite|| Yes/No|| TimeBox || Notes ||\r\n| [N/A] | No |  |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=Accessibility |titleBGColor=#AED9E0|bgColor=#BCF8EC}\r\n||Scan||Yes/No||TimeBox||\r\n| [N/A] | No | |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=SEO, Redirects, Crawls |titleBGColor=#9EE493|bgColor=#DAF7DC}\r\n||Scan||Yes/No||TimeBox||\r\n| [N/A] | No|  |\r\n{panel}",
            "customfield_11732": "SIS-1564",
            "customfield_13330": {
                "value": "Katana",
                "id": "13611"
            },
            "customfield_10013": 3,
            "customfield_10930": 2453
        }
    },
    {
        "update": {},
        "fields": {
            "project": {
                "id": "13280"
            },
            "summary": "Regression in Sp176 for Sp175 - Katana BAU",
            "issuetype": {
                "id": "3"
            },
            "reporter": {
              "name": "cpearson",
              "key": "cpearson",
              "emailAddress": "cpearson@silverchair.com"
            },
            "labels": [
                "sqa",
                "platform_other"
            ],
            "description": "{panel:borderStyle=solid|title=Sprint Regression Testing - Katana |titleBGColor=#9AD1D4|bgColor=#CCDBDC}\r\n\r\nh5. Sprint Regression Testing \r\nPotential points of risk, regression:\r\n* Book loading: \r\n** New books \r\n** Unpublished replacements\r\n** Published replacements\r\n* Zipline 3 workflow\r\n** OUP (with the Content Amalgamator OxMeta\r\n** Non-OUP (GSW, DUP, IWA)\r\n* S3 archiving for books (Note:  SCMP-10682)\r\n\r\nh1. Regression testing needed?\r\n||Org Representation|| Yes/No || Notes ||\r\n|Developers|  | |\r\n|SQA| (/) | |\r\n|ScrumMaster|  | |\r\n|Product Owner|  | |\r\n|Product Delivery Manager| | |\r\n\r\nh4. Decision - Regression Testing Needed: Yes/No\r\n\r\nh5. Platform Sync Up Requests\r\n||Team||JIRA||Area||Regression test Yes/No||TimeBox||\r\n|Team Katana|  |  |Yes|  |\r\n{panel}\r\n\r\n\r\n{panel:borderStyle=solid|title=Manual Regression *Testing* |titleBGColor=#9CC5A1|bgColor=#DCE1DE}\r\n||Area in Need of Regression Testing||Timebox||Notes||\r\n| Zipline 3 workflow, individual services |  |\r\n| Content API |  | \r\n| S3 Archives |  |\r\n| Radiate depositor services |  |\r\n| Published replacements (i.e., the swap) |  |\r\n| smUploaderSvc (Zipline 1 & 2) |  |\r\n| Semedica (Namely Tagmaster) |  |\r\n| Legacy deposits  |  |\r\n\r\n*Production FTP Endpoints and credentials*\r\n* (!) Ensure that all downstream deposit FTP endpoints and credentials are still valid.  To query for these values:  \r\n{code:sql}SELECT DISTINCT dt.name,dt.DefaultEndpoint,dc.[endpoint]\r\nFROM depositConfigs dc\r\n    JOIN depositTypes dt ON dc.DepositTypeId = dt.ID;\r\nGO{code}\r\n{code:sql}\r\nSELECT cm.name,cs.name,ccs.*\r\nFROM componentConfigSettings ccs\r\n    JOIN configSettings cs ON ccs.configSettingID = cs.configSettingID\r\n    JOIN components cm ON ccs.componentID = cm.componentID\r\nWHERE ccs.configSettingID = 41\r\n    AND cm.name LIKE '%DEPOSITORSERVICENAME%';\r\nGO{code}\r\n|| Deposit Service || URL || user || p/w || subdirectories || \r\n| PubMed (Issue/Article) | ftp://ftp-private.ncbi.nlm.nih.gov | silverchair | SPeXn3e4 | (root) |\r\n| PMC (Full/NIH) | ftp://ftp-private.ncbi.nlm.nih.gov | oup | Ko601btH | (root) |\r\n| PMC (Selective) | ftp://ftp-private.ncbi.nlm.nih.gov | oup | Ko601btH | /oup/oxfordopen |\r\n| RSuite (Issue/Article) | ftp://ukftp.oup.com/ | archive | 27iaSP | /pub/SC Feed |\r\n| ADS (Issue/Article) | ftp://adsftp.harvard.edu | anonymous | n/a | /pub/SilverChair |\r\n| CDS (Issue/Article) | ftp://cdsarc.u-strasbg.fr | mnras | FtpAccess,MNRAS! | (root) |\r\n| Ovid (Issue/Article) | ftp://producer.ovid.com | ftp075 | Gtdr2MzE | (root) |\r\n| Portico (Issue/Article) | ftp://ftp.portico.org | OUP | oupdata127 | Silverchair |\r\n| SCOAP3 | ftp://ukftp.oup.com | scoapuser2 | Ux$2FtP2 | /Silverchair |\r\n| AGI | ftp://ftp.georef.org/ | gsw | red7car | (root) |\r\n| EbscoArticle | ftp://192.73.31.75 | Duke | 1N38NJ7v | (root) |\r\n| Ebsco Books | ftp://mft.ebscohost.com | ftp6691 | dj+2kGfS9 | AHO ASM Handbooks Online |\r\n| Proquest | ftp://ftp.summon.serialssolutions.com | asm-primary | mvI4J5h4Nr | updates |\r\n\r\nh3. Full Zipline 3 Regression Testing Plan\r\n*Components* \r\n|| Component || Pass/Fail || Notes ||\r\n| oAuth (2.0) |  |  |\r\n| Workflow Service |  |  |\r\n| File Share (ssc-corpcontent) |  |  |\r\n| Package Validator |  |  |\r\n| Business Rule Validator (Journals) |  |  |\r\n| Business Rule Validator (Books) |  |  |\r\n| LoaderXSLT |  | Location: |\r\n| Zipline |  |  |\r\n| Asset Transformer |  |  |\r\n| Semantic Tagging |  |  |\r\n| Content Archiver |  |  |\r\n| Content Loading Data |  |  |\r\n| SCM6 Data (Journals) |  |  |\r\n| SCM6 Data (Books) |  |  |\r\n| S3 - Archive |  | Check media URLs |\r\n| S3 - Content Public |  |  |\r\n| S3 - Content Archive |  | Check sourceXml URLs |\r\n| Journals - Unpublished Replacements |  |  |\r\n| Journals - Published Replacements |  |  |\r\n| Books - Unpublished Replacements |  |  |\r\n| Books - Published Replacements |  |  |\r\n| Deposits - CrossRefBook |  |  |\r\n| Deposits - CrossRef |  |  |\r\n| Deposits - PMC-NIH |  |  |\r\n| Deposits - PMC-Full |  |  |\r\n| Deposits - PMC-Selective |  |  |\r\n\r\n\r\n*API*\r\n| GET Orphans |  |  |\r\n| Retry Submission |  |  |\r\n| Upload Taxonomy |  |  |\r\n| Trigger Deposit |  |  |\r\n| Renew Token |  |  |\r\n\r\n*UI* - Note that this will cover the majority of the API calls.  The ones not covered are listed in their own matrix, below.  \r\n| Upload - Page Load|  |  |\r\n| Upload - Choose Files|  |  |\r\n| Upload - Select Priority|  | (i) Priority setting doesn't work is a known defect |\r\n| Upload - Upload Files|  |  |\r\n| Package List -  Load |  |  |\r\n| Package List -  Pagination|  |  |\r\n| Package List -  List Size |  |  |\r\n| Package List -  Sorting |  |  |\r\n| Package List -  Filtering |  |  |\r\n| Package List -  Search |  |  |\r\n| Package Detail (Journals) -  Page Load |  |  |\r\n| Package Detail Journals -  Warnings |  |  |\r\n| Package Detail Journals -  Errors |  |  |\r\n| Package Detail Journals -  Publish|  |  |\r\n| Package Detail Journals -  Delete|  |  |\r\n| Package Detail Journals -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Package Detail Books -  Page Load |  |  |\r\n| Package Detail Books -  Warnings |  |  |\r\n| Package Detail Books -  Errors |  |  |\r\n| Package Detail Books -  Publish|  |  |\r\n| Package Detail Books -  Delete|  |  |\r\n| Package Detail Books -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Catalog List (Journals) -  Load |  |  |\r\n| Catalog List (Journals) -  Pagination|  |  |\r\n| Catalog List (Journals) -  List Size |  |  |\r\n| Catalog List (Journals) -  Sorting |  |  |\r\n| Catalog List (Journals) -  Filtering |  |  |\r\n| Catalog List (Journals) -  Search |  |  |\r\n| Catalog List (Journals) -  Publish/Unpublish |  |  |\r\n| Catalog List (Journals detail) -  Load |  |  |\r\n| Catalog List (Journals detail) -  Pagination|  |  |\r\n| Catalog List (Journals detail) -  List Size |  |  |\r\n| Catalog List (Journals detail) -  Publish/Unpublish |  |  |\r\n| Catalog List (Journals detail) -  Preview |  | Preview only generates a URL referencing a handler |\r\n| Catalog List (Journals detail) -  Warning |  |  |\r\n| Catalog List (Journals detail) -  Error |  |  |\r\n| Catalog List (Books) -  Load |  |  |\r\n| Catalog List (Books) -  Pagination|  |  |\r\n| Catalog List (Books) -  List Size |  |  |\r\n| Catalog List (Books) -  Sorting |  |  |\r\n| Catalog List (Books) -  Filtering |  |  |\r\n| Catalog List (Books) -  Search |  |  |\r\n| Catalog List (Books) - Publish Book |  |  |\r\n| Catalog List (Books) - Expire Book |  |  |\r\n| Catalog List (Books) - Delete Book|  |  |\r\n| Catalog List (Books detail) -  Load |  |  |\r\n| Catalog List (Books detail) - Expand All |  |  |\r\n| Catalog List (Books detail) - Collapse All |  |  |\r\n| Catalog List (Books detail) -  Book status publish|  |  |\r\n| Catalog List (Books detail) -  Book status expire |  |  |\r\n| Catalog List (Books detail) -  Book status delete |  |  |\r\n| Catalog List (Books detail) -  Warning |  |  |\r\n| Catalog List (Books detail) -  Publish |  |  |\r\n| Catalog List (Books detail) -  Preview |  |  |\r\n| Catalog List (Books detail) -  Delete |  |  |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=Automated Regression *Testing* |titleBGColor=#458CD3|bgColor=#86BBD8}\r\n||Suite|| Yes/No|| TimeBox || Notes ||\r\n| [N/A] | No |  |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=Accessibility |titleBGColor=#AED9E0|bgColor=#BCF8EC}\r\n||Scan||Yes/No||TimeBox||\r\n| [N/A] | No | |\r\n{panel}\r\n\r\n{panel:borderStyle=solid|title=SEO, Redirects, Crawls |titleBGColor=#9EE493|bgColor=#DAF7DC}\r\n||Scan||Yes/No||TimeBox||\r\n| [N/A] | No|  |\r\n{panel}",
            "customfield_11732": "SIS-1564",
            "customfield_13330": {
                "value": "Katana",
                "id": "13611"
            },
            "customfield_10013": 3,
            "customfield_10930": 2454
        }
    }     
    ]
}
