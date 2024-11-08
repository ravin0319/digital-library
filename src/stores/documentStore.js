// src/stores/documentStore.js
import { defineStore } from 'pinia'

export const useDocumentStore = defineStore('document', {
  state: () => ({
    ownDocuments: [
      {
        title: 'Price List Generator',
        document:
          '<div><h4>Price List Generator</h4><p>You can download the Price List via the MyCLS Partner Portal.</p> <p><b>Step 1:</b> Select My Tools and click on Download Price List.</p><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/download.png"></div><p>The below page shown below will be loaded.</p><p><b>Step 2:</b>Enter the following details:</p><table class="table"><tbody><tr><th>Field</th><th>Description</th></tr><tr><td>Select Your Company</td><td>The company you work for. Auto Populated based on the partner portal login.</td></tr><tr><td>Select Distributor</td><td>The distributor for whom you would like to generate the price list</td></tr><tr><td>Select Pricing Date</td><td>The price list generator shows prices that are valid for the selected date.</td></tr></tbody></table><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/pricelist.png"></div><p><b>Step 3:</b> Click on the Generate Price List button.</p><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/generatelist.png"></div><p>You will see the below popup and will receive an email with the attached pricelist.</p><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/popup1.png"></div><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/listemail.png"></div></div>',
        projectTitle: 'Price Management',
        projectId: 123,
        documentId: 111,
      },
      {
        title: 'Document 2',
        document: 'This is the content of Document 2',
        projectTitle: 'AI Research Initiative',
      },
      {
        title: 'Report A',
        document: 'Details of Report A',
        projectTitle: 'Green Energy Solutions',
      },
      {
        title: 'Report B',
        document: 'Details of Report B',
        projectTitle: 'Green Energy Solutions',
      },
      {
        title: 'Report C',
        document: 'Details of Report C',
        projectTitle: 'Green Energy Solutions',
      },
      {
        title: 'Summary 1',
        document: 'This is the summary for Document 1',
        projectTitle: 'Community Outreach Program',
      },
      {
        title: 'Technical Doc',
        document: 'Technical details for this document',
        projectTitle: 'Tech Development Roadmap',
      },
      {
        title: 'User Guide',
        document: 'Instructions for use',
        projectTitle: 'Tech Development Roadmap',
      },
      {
        title: 'Research Paper 1',
        document: 'Research details of Paper 1',
        projectTitle: 'Healthcare System Analysis',
      },
      {
        title: 'Research Paper 2',
        document: 'Research details of Paper 2',
        projectTitle: 'Healthcare System Analysis',
      },
      {
        title: 'Research Paper 3',
        document: 'Research details of Paper 3',
        projectTitle: 'Healthcare System Analysis',
      },
      {
        title: 'Initial Plan',
        document: 'Initial plan details',
        projectTitle: 'Marketing Campaign 2024',
      },
      {
        title: 'Execution Steps',
        document: 'Execution strategy explained',
        projectTitle: 'Marketing Campaign 2024',
      },
      {
        title: 'Feedback Summary',
        document: 'Summary of client feedback',
        projectTitle: 'Marketing Campaign 2024',
      },
      {
        title: 'Meeting Notes 1',
        document: 'Notes from the first meeting',
        projectTitle: 'Product Launch Initiative',
      },
      {
        title: 'Meeting Notes 2',
        document: 'Notes from the second meeting',
        projectTitle: 'Product Launch Initiative',
      },
      {
        title: 'Budget Overview',
        document: 'Details on the budget allocation',
        projectTitle: 'Urban Planning Strategy',
      },
      {
        title: 'Proposal Draft',
        document: 'Draft of the project proposal',
        projectTitle: 'Startup Funding Proposal',
      },
      {
        title: 'Design Document',
        document: 'Specifications for the design',
        projectTitle: 'Software Development Cycle',
      },
      {
        title: 'Blueprints',
        document: 'Detailed architectural blueprints',
        projectTitle: 'Software Development Cycle',
      },
      {
        title: 'Case Study 1',
        document: 'An in-depth case study analysis',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Case Study 2',
        document: 'Second case study details',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Case Study 3',
        document: 'Another detailed analysis',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Case Study 4',
        document: 'Additional insights from Case Study 4',
        projectTitle: 'Educational Reform Plan',
      },
    ],
    sharedDocuments: [
      {
        title: 'Case Study 1',
        document: 'An in-depth case study analysis',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Case Study 2',
        document: 'Second case study details',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Case Study 3',
        document: 'Another detailed analysis',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Case Study 4',
        document: 'Additional insights from Case Study 4',
        projectTitle: 'Educational Reform Plan',
      },
      {
        title: 'Workshop Agenda',
        document: 'Agenda for the upcoming workshop',
        projectTitle: 'Corporate Training Schedule',
      },
      {
        title: 'Checklist',
        document: 'A checklist of essential tasks',
        projectTitle: 'Logistics Optimization Plan',
      },
      {
        title: 'Completion Report',
        document: 'Final report upon project completion',
        projectTitle: 'Logistics Optimization Plan',
      },
      {
        title: 'Analysis Report',
        document: 'Comprehensive analysis of data',
        projectTitle: 'Customer Insights Study',
      },
      {
        title: 'Survey Results',
        document: 'Results from the survey conducted',
        projectTitle: 'Customer Insights Study',
      },
      {
        title: 'Strategy Outline',
        document: 'Detailed strategy for the project',
        projectTitle: 'Business Strategy 2025',
      },
      {
        title: 'Documentation Guide',
        document: 'How to guide for project documentation',
        projectTitle: 'Technical Documentation Update',
      },
      {
        title: 'Reference Material',
        document: 'List of all references used',
        projectTitle: 'Technical Documentation Update',
      },
      {
        title: 'Appendix',
        document: 'Additional resources and appendix',
        projectTitle: 'Technical Documentation Update',
      },
      {
        title: 'Implementation Plan',
        document: 'Plan outlining the implementation steps',
        projectTitle: 'Infrastructure Upgrade Proposal',
      },
      {
        title: 'Review 1',
        document: 'Review of the project phase 1',
        projectTitle: 'Quarterly Review Report',
      },
      {
        title: 'Review 2',
        document: 'Second phase review',
        projectTitle: 'Quarterly Review Report',
      },
      {
        title: 'Audit Report',
        document: 'Report from the recent audit',
        projectTitle: 'Financial Audit Overview',
      },
      {
        title: 'Summary of Findings',
        document: 'Summary of key findings',
        projectTitle: 'Financial Audit Overview',
      },
      {
        title: 'Training Manual',
        document: 'Manual for training new staff',
        projectTitle: 'Employee Training Initiative',
      },
      {
        title: 'Best Practices',
        document: 'List of best practices to follow',
        projectTitle: 'Employee Training Initiative',
      },
    ],
  }),
  actions: {},
})
