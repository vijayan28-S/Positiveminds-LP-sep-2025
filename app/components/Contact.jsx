export default function Contact() {
  const LocationIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c4.97-5.056 8-8.554 8-12a8 8 0 10-16 0c0 3.446 3.03 6.944 8 12z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11a2 2 0 110-4 2 2 0 010 4z"
      />
    </svg>
  );

  const PhoneIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75a.75.75 0 01.75-.75h2.09c.41 0 .77.28.87.68l.58 2.32a.75.75 0 01-.19.7L5.21 11.2a11.05 11.05 0 005.59 5.59l1.75-1.64a.75.75 0 01.7-.19l2.32.58c.4.1.68.46.68.87v2.09a.75.75 0 01-.75.75H6.75A4.5 4.5 0 012.25 17V6.75z"
      />
    </svg>
  );

  const MailIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5l-9.53 6.36a.75.75 0 01-.84 0L1.85 7.5M2.25 6h19.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V6.75A.75.75 0 012.25 6z"
      />
    </svg>
  );

  const ContactCard = ({ Icon, title, children }) => (
    <div className="flex items-start space-x-4">
      <Icon className="w-7 h-7 text-[#22abe0] shrink-0" />
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2   gap-12 items-start">

          {/* Left Column: Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden order-2 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.951715361973!2d-121.86156020000001!3d37.6675922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9ac2f543e99%3A0x7cd74680980d06b7!2sPositive%20Minds%20Academy!5e1!3m2!1sen!2sin!4v1759229589426!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white shadow-md rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Contact Information
              </h2>

              <ContactCard Icon={LocationIcon} title="Address">
                <p>
                  Positive Minds Academy <br />
                  39 California Avenue, Suite #108 <br />
                  Pleasanton, CA 94566
                </p>
              </ContactCard>

              <ContactCard Icon={PhoneIcon} title="Phone">
                <p>+1 (925) 217-0673</p>
              </ContactCard>

              <ContactCard Icon={MailIcon} title="Email">
                <p>sarmita@positivemindsacademy.com</p>
              </ContactCard>
            </div>

            {/* Operating Hours */}
            <div className="bg-blue-50 shadow-md rounded-xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Operating Hours
              </h2>
              <div className="flex justify-between text-gray-700">
                <span>Monday - Saturday</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Sunday</span>
                <span className="text-red-500">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
