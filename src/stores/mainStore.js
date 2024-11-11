// src/stores/mainStore.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    ownProjects: [
      {
        title: 'Price Management',
        projectId: 1,
        documents: [
          {
            projectId: 1,
            title: 'Price List Generator',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Green Energy Solutions',
        projectId: 2,
        documents: [
          {
            projectId: 2,
            title: 'Report A',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 2,
            title: 'Report B',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 2,
            title: 'Report C',
            documentId: 3,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Community Outreach Program',
        projectId: 3,
        documents: [
          {
            projectId: 3,
            title: 'Summary 1',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Tech Development Roadmap',
        projectId: 4,
        documents: [
          {
            projectId: 4,
            title: 'Technical Doc',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 4,
            title: 'User Guide',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Healthcare System Analysis',
        projectId: 5,
        documents: [
          {
            projectId: 5,
            title: 'Research Paper 1',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 5,
            title: 'Research Paper 2',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 5,
            title: 'Research Paper 3',
            documentId: 3,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Urban Planning Strategy',
        projectId: 6,
        documents: [
          {
            projectId: 6,
            title: 'Budget Overview',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Marketing Campaign 2024',
        projectId: 7,
        documents: [
          {
            projectId: 7,
            title: 'Initial Plan',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 7,
            title: 'Execution Steps',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 7,
            title: 'Feedback Summary',
            documentId: 3,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Product Launch Initiative',
        projectId: 8,
        documents: [
          {
            projectId: 8,
            title: 'Meeting Notes 1',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 8,
            title: 'Meeting Notes 2',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Startup Funding Proposal',
        projectId: 9,
        documents: [
          {
            projectId: 9,
            title: 'Proposal Draft',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Software Development Cycle',
        projectId: 10,
        documents: [
          {
            projectId: 10,
            title: 'Design Document',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 10,
            title: 'Blueprints',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Educational Reform Plan',
        projectId: 11,
        documents: [
          {
            projectId: 11,
            title: 'Case Study 1',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 11,
            title: 'Case Study 2',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 11,
            title: 'Case Study 3',
            documentId: 3,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 11,
            title: 'Case Study 4',
            documentId: 4,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
    ],
    sharedProjects: [
      {
        title: 'Educational Reform Plan',
        projectId: 12,
        documents: [
          {
            projectId: 12,
            title: 'Case Study 1',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 12,
            title: 'Case Study 2',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 12,
            title: 'Case Study 3',
            documentId: 3,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 12,
            title: 'Case Study 4',
            documentId: 4,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Corporate Training Schedule',
        projectId: 13,
        documents: [
          {
            projectId: 13,
            title: 'Workshop Agenda',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Logistics Optimization Plan',
        projectId: 14,
        documents: [
          {
            projectId: 14,
            title: 'Checklist',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 14,
            title: 'Completion Report',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Customer Insights Study',
        projectId: 15,
        documents: [
          {
            projectId: 15,
            title: 'Analysis Report',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 15,
            title: 'Survey Results',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Business Strategy 2025',
        projectId: 16,
        documents: [
          {
            projectId: 16,
            title: 'Strategy Outline',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Technical Documentation Update',
        projectId: 17,
        documents: [
          {
            projectId: 17,
            title: 'Documentation Guide',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 17,
            title: 'Reference Material',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 17,
            title: 'Appendix',
            documentId: 3,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Infrastructure Upgrade Proposal',
        projectId: 18,
        documents: [
          {
            projectId: 18,
            title: 'Implementation Plan',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Quarterly Review Report',
        projectId: 19,
        documents: [
          {
            projectId: 19,
            title: 'Review 1',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 19,
            title: 'Review 2',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Financial Audit Overview',
        projectId: 20,
        documents: [
          {
            projectId: 20,
            title: 'Audit Report',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 20,
            title: 'Summary of Findings',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
      {
        title: 'Employee Training Initiative',
        projectId: 21,
        documents: [
          {
            projectId: 21,
            title: 'Training Manual',
            documentId: 1,
            document: '<div><h4>Price List Generator</h4></div>',
          },
          {
            projectId: 21,
            title: 'Best Practices',
            documentId: 2,
            document: '<div><h4>Price List Generator</h4></div>',
          },
        ],
      },
    ],
  }),
  actions: {},
})
