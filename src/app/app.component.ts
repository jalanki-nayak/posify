import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  title = 'posify';

  /**
   * Links for client images
   */
  client = [
    'https://posify.in/images/client/63bylane.webp',
    'https://posify.in/images/client/bss.webp',
    'https://posify.in/images/client/o_pedro_web.webp',
    'https://posify.in/images/client/nazeer.webp',
    'https://posify.in/images/client/kolkata.webp',
    'https://posify.in/images/client/amritsr.webp',
    'https://posify.in/images/client/instawich.webp',
    'https://posify.in/images/client/junos.png.webp',
    'https://posify.in/images/client/gopinath.webp',
    'https://posify.in/images/client/burgerama.jpeg.webp',
    'https://posify.in/images/client/chai_kings.webp',
    'https://posify.in/images/client/blue_tokai.webp',
    'https://posify.in/images/client/veggies.webp',
    'https://posify.in/images/client/instapizza.webp',
    'https://posify.in/images/client/new-york-waffle.webp',
    'https://posify.in/images/client/picazzo.webp',
    'https://posify.in/images/client/logo-dark.webp',
    'https://posify.in/images/client/sushiya.webp',
  ];

  /**
   * Json array for features card
   */
  features = [
    {
      icon: '../assets/image/cloud_img.jpeg',
      title: 'Cloud Based',
      desc: 'Hosted on reliable servers that makes sure the data gets stored safely.',
    },
    {
      icon: '../assets/image/cloud_img.jpeg',
      title: '24/7 Support',
      desc: 'A 24x7 support that makes sure your business is always up and running.',
    },
    {
      icon: '../assets/image/cloud_img.jpeg',
      title: 'Access from Anywhere',
      desc: 'Helps you access and manage your business anywhere, anytime.',
    },
    {
      icon: '../assets/image/cloud_img.jpeg',
      title: 'Franchise & Cloud Kitchen',
      desc: 'Franchise & Cloud Kitchen</h5>Control & Compare performances across outlets/brands.',
    },
    {
      icon: '../assets/image/cloud_img.jpeg',
      title: 'Secure',
      desc: 'Stored both locally & on the cloud, your data is safe & secure.',
    },
    {
      icon: '../assets/image/cloud_img.jpeg',
      title: 'Real-time Data',
      desc: 'Real-time data and reports to take instant steps towards the business.',
    },
  ];

  /**
   * Json for Images and List
   */
  billing = {
    title: 'Posify Billing',
    descrption:
      'Punch orders,inform the kitchen by printing KOTs, print receipts, track orders, manage customer database - all with our cloud based POS system.',
    list: [
      'Billing',
      'Table Management',
      'Kitchen Display System',
      'Logs',
      'Pending Orders',
      'Trigger Points',
      'Subscription',
    ],
    imgLink: 'https://posify.in/images/features/billing.webp',
  };

  ordering = {
    title: 'Posify Web Ordering',
    descrption: 'Complete online ordering platform with:',
    list: [
      ' Customer Loyalty',
      'Mobile Friendly UI',
      'Contact-less Operation',
      'Rider Tracking',
      'Customer Feedback',
      'Inbuilt Marketing Tool',
    ],
    imgLink: 'https://posify.in/images/features/web-ordering.webp',
  };

  link = {
    title: 'Posify Link',
    descrption:
      'Replace the hassle of managing aggregator orders in different tabs with an all-in-one integrated dashboard.',
    list: [
      'Aggregator Orders Management',
      'Product Status Management',
      'Product Availability Scheduling',
    ],
    imgLink: 'https://posify.in/images/features/link2.webp',
  };

  inventory = {
    title: 'Posify Inventory',
    descrption:
      'Managing stock and inventory in multiple outlets or franchise has never more simpler.',
    list: [
      'Stock Management',
      'Vendor Management',
      'Stock Requesting from central whare',
    ],
    imgLink: 'https://posify.in/images/features/inventory.webp',
  };

  analytics = {
    title: 'Posify Analytics',
    descrption:
      'Real time reports are displayed in a simple and actionable format right on your mobile device to help you make the informed business decisions.',
    list: ['Realtime Reports', 'Multiple Dashboards', 'Business Analysis'],
    imgLink: 'https://posify.in/images/features/analytics.webp',
  };

  /**
   * Json array for icon card
   */
  cards = [
    {
      icon: 'account_circle',
      title: 'Easy UI/UX',
    },
    {
      icon: 'lock',
      title: 'Top Notch Security',
    },
    {
      icon: 'cloud_upload',
      title: 'Offline Support',
    },
  ];

  /**
   * Links for Partners Image
   */
  partnerImg = [
    'https://posify.in/images/integrations/Razorpay.webp',
    'https://posify.in/images/integrations/Loyalty.webp',
    'https://posify.in/images/integrations/Zomato.webp',
    'https://posify.in/images/integrations/UrbanPiper.webp',
    'https://posify.in/images/integrations/ErpNext.webp',
    'https://posify.in/images/integrations/SupplyNote.webp',
    'https://posify.in/images/integrations/Quickcilver.webp',
    'https://posify.in/images/integrations/Roadcast.webp',
    'https://posify.in/images/integrations/WeFast.webp',
    'https://posify.in/images/integrations/Pidge.webp',
    'https://posify.in/images/integrations/whatsapp.webp',
    'https://posify.in/images/integrations/Shiprocket.webp',
    'https://posify.in/images/integrations/Pinelabs.webp',
    'https://posify.in/images/integrations/Dotpe.webp',
  ];

  /**
   * Json for testimonial cards
   */
  testimonial = [
    {
      iconLink: 'https://posify.in/images/client/up.webp',
      name: 'Sirisha Naidu',
      title: 'Head - Partnerships at UrbanPiper',
      descrption:
        '“The team at Posify is fantastic to work with. They are a true partner team because they share many similar attributes that we value at Urbanpiper: Not only customer focus and resourcefulness but also the ability and sense of urgency required to deliver the optimal POS solution”',
    },
    {
      iconLink: 'https://posify.in/images/client/o_pedro_web.webp',
      name: 'Yash Bhanage',
      title: 'Founder (Hunger Inc Hospitality)',
      descrption:
        '“We at O Pedro, The Bombay Canteen & Bombay Sweet Shop have loved working with Posify, the POS is easy to use on a daily basis and allows us seamless integration with all delivery aggregators. The best part of posify is the easy setup and great support from the team, the added bonus is the mini website which allows us to run our own delivery operations.”',
    },
    {
      iconLink: 'https://posify.in/images/client/chai_kings.webp',
      name: 'Sakshi',
      title: 'Chai Kings',
      descrption:
        '“The product has really grown over the years with exceptional features being added. The team always works on your feedback and is very dedicated to providing you with a great product.”',
    },
  ];

  /**
   * Json array for blogs card
   */
  blogs = [
    {
      imageLink: 'https://posify.in/images/blog/steal1.webp',
      title: 'Theft Detection',
      subtitle: 'by Saurabh Gupta on July 10 2019',
      descrption:
        'Posify can help you track pilferage and identify theft, and help you prevent it.',
    },
    {
      imageLink: 'https://posify.in/images/blog/3403228.webp',
      title: 'Reconciling aggregator’s payment',
      subtitle: 'by Saurabh on August 4 2019',
      descrption:
        "Here’s how you can handle orders from different food delivery aggregator's & reconcile your payout...",
    },
    {
      imageLink: 'https://posify.in/images/blog/track.webp',
      title: 'Delievery with Rider Tracking',
      subtitle: 'by Tushar Goel on January 17 2020',
      descrption:
        'Are you tired of paying heavy commissions and low order volumes aggregator websites...',
    },
  ];
}
