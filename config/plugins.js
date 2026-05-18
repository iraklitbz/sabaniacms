module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.resend.com',
          port: 465,
          secure: true,
          auth: {
            user: 'resend',
            pass: env('RESEND_API_KEY'),
          },
        },
        settings: {
          defaultFrom: env('EMAIL_FROM', 'noreply@sabania.eu'),
          defaultReplyTo: env('EMAIL_REPLY_TO', 'noreply@sabania.eu'),
        },
      },
    },
  });