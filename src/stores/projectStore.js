// src/stores/projectStore.js
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    ownProjects: [
      {
        title: 'Price Management',
        projectId: 123,
        documents: [
          {
            title: 'Price List Generator',
            documentId: 111,
            document:
              '<div><h4>Price List Generator</h4><p>You can download the Price List via the MyCLS Partner Portal.</p> <p><b>Step 1:</b> Select My Tools and click on Download Price List.</p><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/download.png"></div><p>The below page shown below will be loaded.</p><p><b>Step 2:</b>Enter the following details:</p><table class="table"><tbody><tr><th>Field</th><th>Description</th></tr><tr><td>Select Your Company</td><td>The company you work for. Auto Populated based on the partner portal login.</td></tr><tr><td>Select Distributor</td><td>The distributor for whom you would like to generate the price list</td></tr><tr><td>Select Pricing Date</td><td>The price list generator shows prices that are valid for the selected date.</td></tr></tbody></table><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/pricelist.png"></div><p><b>Step 3:</b> Click on the Generate Price List button.</p><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/generatelist.png"></div><p>You will see the below popup and will receive an email with the attached pricelist.</p><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/popup1.png"></div><div class="nochange"><img src="https://www.webtools.cooperlighting.com/priceManagement/images/listemail.png"></div></div>',
          },
        ],
      },
      {
        title: 'Green Energy Solutions',
        documents: [
          {
            title: 'Report A',
            document: 'Details of Report A',
          },
          {
            title: 'Report B',
            document: 'Details of Report B',
          },
          {
            title: 'Report C',
            document: 'Details of Report C',
          },
        ],
      },
      {
        title: 'Community Outreach Program',
        documents: [
          {
            title: 'Summary 1',
            document: 'This is the summary for Document 1',
          },
        ],
      },
      {
        title: 'Tech Development Roadmap',
        documents: [
          {
            title: 'Technical Doc',
            document: 'Technical details for this document',
          },
          {
            title: 'User Guide',
            document: 'Instructions for use',
          },
        ],
      },
      {
        title: 'Healthcare System Analysis',
        documents: [
          {
            title: 'Research Paper 1',
            document: 'Research details of Paper 1',
          },
          {
            title: 'Research Paper 2',
            document: 'Research details of Paper 2',
          },
          {
            title: 'Research Paper 3',
            document: 'Research details of Paper 3',
          },
        ],
      },
      {
        title: 'Urban Planning Strategy',
        documents: [
          {
            title: 'Budget Overview',
            document: 'Details on the budget allocation',
          },
        ],
      },
      {
        title: 'Marketing Campaign 2024',
        documents: [
          {
            title: 'Initial Plan',
            document: 'Initial plan details',
          },
          {
            title: 'Execution Steps',
            document: 'Execution strategy explained',
          },
          {
            title: 'Feedback Summary',
            document: 'Summary of client feedback',
          },
        ],
      },
      {
        title: 'Product Launch Initiative',
        documents: [
          {
            title: 'Meeting Notes 1',
            document: 'Notes from the first meeting',
          },
          {
            title: 'Meeting Notes 2',
            document: 'Notes from the second meeting',
          },
        ],
      },
      {
        title: 'Startup Funding Proposal',
        documents: [
          {
            title: 'Proposal Draft',
            document: 'Draft of the project proposal',
          },
        ],
      },
      {
        title: 'Software Development Cycle',
        documents: [
          {
            title: 'Design Document',
            document: 'Specifications for the design',
          },
          {
            title: 'Blueprints',
            document: 'Detailed architectural blueprints',
          },
        ],
      },
      {
        title: 'Educational Reform Plan',
        documents: [
          {
            title: 'Case Study 1',
            document: 'An in-depth case study analysis',
          },
          {
            title: 'Case Study 2',
            document: 'Second case study details',
          },
          {
            title: 'Case Study 3',
            document: 'Another detailed analysis',
          },
          {
            title: 'Case Study 4',
            document: 'Additional insights from Case Study 4',
          },
        ],
      },
    ],
    sharedProjects: [
      {
        title: 'Educational Reform Plan',
        documents: [
          {
            title: 'Case Study 1',
            document: 'An in-depth case study analysis',
          },
          {
            title: 'Case Study 2',
            document: 'Second case study details',
          },
          {
            title: 'Case Study 3',
            document: 'Another detailed analysis',
          },
          {
            title: 'Case Study 4',
            document: 'Additional insights from Case Study 4',
          },
        ],
      },
      {
        title: 'Corporate Training Schedule',
        documents: [
          {
            title: 'Workshop Agenda',
            document: 'Agenda for the upcoming workshop',
          },
        ],
      },
      {
        title: 'Logistics Optimization Plan',
        documents: [
          {
            title: 'Checklist',
            document: 'A checklist of essential tasks',
          },
          {
            title: 'Completion Report',
            document: 'Final report upon project completion',
          },
        ],
      },
      {
        title: 'Customer Insights Study',
        documents: [
          {
            title: 'Analysis Report',
            document: 'Comprehensive analysis of data',
          },
          {
            title: 'Survey Results',
            document: 'Results from the survey conducted',
          },
        ],
      },
      {
        title: 'Business Strategy 2025',
        documents: [
          {
            title: 'Strategy Outline',
            document: 'Detailed strategy for the project',
          },
        ],
      },
      {
        title: 'Technical Documentation Update',
        documents: [
          {
            title: 'Documentation Guide',
            document: 'How to guide for project documentation',
          },
          {
            title: 'Reference Material',
            document: 'List of all references used',
          },
          {
            title: 'Appendix',
            document: 'Additional resources and appendix',
          },
        ],
      },
      {
        title: 'Infrastructure Upgrade Proposal',
        documents: [
          {
            title: 'Implementation Plan',
            document: 'Plan outlining the implementation steps',
          },
        ],
      },
      {
        title: 'Quarterly Review Report',
        documents: [
          {
            title: 'Review 1',
            document: 'Review of the project phase 1',
          },
          {
            title: 'Review 2',
            document: 'Second phase review',
          },
        ],
      },
      {
        title: 'Financial Audit Overview',
        documents: [
          {
            title: 'Audit Report',
            document: 'Report from the recent audit',
          },
          {
            title: 'Summary of Findings',
            document: 'Summary of key findings',
          },
        ],
      },
      {
        title: 'Employee Training Initiative',
        documents: [
          {
            title: 'Training Manual',
            document: 'Manual for training new staff',
          },
          {
            title: 'Best Practices',
            document: 'List of best practices to follow',
          },
        ],
      },
    ],
  }),
  actions: {},
})
