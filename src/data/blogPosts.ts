export type BlogBlock =
  | {
      type: 'heading'
      value: string
    }
  | {
      type: 'text'
      value: string
    }
  | {
      type: 'image'
      src: string
      caption?: string
    }

export type BlogPost = {
  id: number
  slug: string
  title: string
  date: string
  author: string
  blocks: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {

    id: 0,
    slug: 'no-water-no-dignity',
    title: 'No Water, No Dignity: Inside the Everyday WASH Crisis in Lagos’ Informal Settlements',
    date: 'March 9, 2026',
    author: 'Nafiu Atanda',
    blocks: [
        {
        type: 'image',
        src: '/imgaes/img2.jpg',
        caption: 'Women-led water committee launching charter of demands in Okerube',
      },

      {
        type: 'text',
        value:
          'In many informal settlements across Lagos, access to clean water is not a given. For residents, it is a daily struggle shaped by uncertainty, cost, and risk.',
      },

      {
        type: 'text',
        value:
          'Most households depend on unsafe wells, shared pit latrines, or water bought from private vendors. During periods of flooding, these already limited sources become contaminated, making a difficult situation worse. Women and children bear the greatest burden, facing increased health risks, exposure to harassment, and disruptions to their daily routines.',
      },

      {
        type: 'text',
        value:
          'Okerube, a community under Igando/Ikotun LCDA, reflects this reality. There is no government-provided water, and sanitation infrastructure is minimal. Residents rely on wells and vendors for their daily needs, a system that affects how they work, care for their families, and navigate everyday life.',
      },

       {
        type: 'text',
        value:
          'Like many informal settlements in Lagos, Okerube faces layered challenges — weak infrastructure, limited social services, and insecure land tenure. Despite being within the LCDA, basic services remain out of reach. Over time, residents have developed their own coping systems, especially around water and sanitation. One of these is a community-led initiative, driven largely by women.',
      },

      {
        type: 'heading',
        value: 'Women Step In Where Systems Fail',
      },
      {
        type: 'image',
        src: '/imgaes/img0.jpg',
        caption: 'Women-led water committee in technical traing',
      },
      {
        type: 'text',
        value:
          'In 2023, a women-led water committee was formed in Okerube with support from the Shantytown Empowerment Foundation (SHEF), in partnership with Heinrich-Böll-Stiftung (hbs), working alongside informal settlement groups and other partners. Similar committees exist in Ogunsanya (Coker-Orile), and in the Idiaraba and Mosafejo communities in Oworo, Kosofe.',
      },

      {
        type: 'text',
        value:
          'Each committee has about 20 members, mostly women, with a few men supporting technical tasks. The members were also trained in basic plumbing techniques and received financial literacy training, with support from SHEF in partnership with hbs.',
      },

      {
        type: 'text',
        value:
          'SHEF, in partnership with hbs, also supported the women’s committee in developing a charter of demands, which was presented to the community councillor as part of their engagement with local authorities.',
      },

      {
        type: 'text',
        value:
          'The idea behind the committee is rooted in a recurring problem: water projects in these communities often fail. Many are delivered through political donations or constituency projects, but without proper engagement or maintenance plans. Over time, they stop working and are abandoned.',
      },

      {
        type: 'text',
        value:
          '“We didn’t even know the project belonged to us,” said Adeleke Adekunle, speaking about a borehole installed at Pako bus stop. “So there was no plan to manage it. Now it is no longer functioning.” Faced with this pattern, women in the community decided to act. Already responsible for sourcing water, maintaining households, and caring for their families, they organized themselves to take ownership of water management. With support from the African Cities Research Consortium (ACRC), the committee’s work expanded to include sanitation, using Okerube as a pilot site.',
      },

      {
        type: 'heading',
        value: 'The Cost of Water, The Cost of Time',
      },
     
      {
        type: 'text',
        value:
          'For many residents, access to water comes at a high cost — both financially and physically. “I walk about four miles before I can get water,” said Shukurat, a resident. “Sometimes the vendors refuse to pump. It affects children going to school because they go late.”',
      },

       {
        type: 'text',
        value:
          'These daily challenges disrupt livelihoods, education, and basic wellbeing. Water is not just a service gap — it is a barrier to stability.',
      },

      {
        type: 'heading',
        value: 'Pushing for Government Response',
      },
      {
        type: 'image',
        src: '/imgaes/img1.jpg',
        caption: 'Members of the committee standing with the donated borehole',
      },
      {
        type: 'text',
        value:
          'The committee began engaging government institutions in search of a more sustainable solution. Initial discussions with the state water corporation made it clear that the community was not within its immediate service plans. The group was then directed to the Lagos State Ministry of Local Government, Chieftaincy Affairs and Rural Development.',
      },

       {
        type: 'text',
        value:
          'Working with other communities and supported by SHEF, they presented a list of needs — water, sanitation facilities, roads, and schools. Two years later, Okerube saw results. A borehole project was approved in 2025 and completed in 2026. This time, however, the approach was different.',
      },

      {
        type: 'heading',
        value: 'From Donation to Ownership',
      },

       {
        type: 'text',
        value:
          'Unlike previous projects, the new borehole is managed directly by the community through the women-led committee. “We meet regularly, share responsibilities, and monitor how the system is working,” said Mrs Daniel, a member of the committee. “Even though the water was given freely, we agreed to collect a small token for maintenance.”',
      },

       {
        type: 'text',
        value:
          'This approach forms part of a social enterprise model designed with support from ACRC. The idea is simple: small community contributions fund maintenance, ensuring the system does not fall into disrepair.',
      },

          {
        type: 'text',
        value:
          'Beyond water access, the model is strengthening local capacity. “It is not just about water,” said Muriana Oluwaseun, a project co-lead. “It is about building the ability of the community to manage its own resources and make informed decisions.”',
      },

      {
        type: 'heading',
        value: 'Building Partnerships, Not Working in Isolation',
      },

      {
        type: 'image',
        src: '/imgaes/img3.jpg',
        caption: 'ACRC team meeting with local government Chairman and Councilors',
      },

      {
        type: 'text',
        value:
          'The committee has also strengthened its engagement with local government. Meetings have been held with community representatives and officials, including the Chairman of Igando/Ikotun LCDA.',
      },

      {
        type: 'text',
        value:
          'During a recent visit involving ACRC teams from Lagos and Nairobi, the chairman expressed willingness to support the initiative and assigned local government staff to work with the committee. The collaboration has also drawn attention from offices focused on sustainable development and socio-economic empowerment within the LCDA.',
      },

      {
        type: 'heading',
        value: 'Beyond Water',
      },
      {
        type: 'text',
        value:
          'What is happening in Okerube points to something larger. While the immediate issue is water, the response is opening up broader conversations around sanitation, health, education, and community planning.',
      },

      {
        type: 'text',
        value:
          '“This project is not just about WASH,” said Rasheed Shittu of SHEF. “It creates a pathway for the community to plan, prioritize, and advocate for other needs.”',
      },

      {
        type: 'heading',
        value: 'A Community Still in Motion',
      },
      {
        type: 'text',
        value:
          'For the women leading this effort, the work is ongoing. Their focus remains on ensuring access to clean, affordable water while improving living conditions across the community.',
      },

      {
        type: 'text',
        value:
          'In a place where systems often fall short, Okerube is showing what happens when residents step in — not just to cope, but to build something that lasts.',
      },


      {
        type: 'text',
        value:
          '',
      },

      {
        type: 'text',
        value:
          'This report was facilitated by DevReporting in partnership with Pro-Poor Development Media Network (PDM-Network) and supported by the African Cities Research Consortium (ACRC).',
      },

      
    ],
  },
]