import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
                <p className="text-gray-600 text-sm mb-6">Effective Date: <span className="font-medium">[Insert Date]</span></p>

                <p className="text-gray-700 mb-4">
                    Welcome to <span className="font-semibold">[Job Portal Name]</span>! Your privacy is important to us, and we are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, store, and share your data when you access and use our platform.
                </p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>

                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-700">a. Personal Information</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Name, email address, phone number, and mailing address.</li>
                            <li>Employment details, resumes, and cover letters.</li>
                            <li>Job preferences such as desired role, location, and salary expectations.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-700">b. Usage Data</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>IP address, browser type, and operating system.</li>
                            <li>Pages visited, time spent, and search queries.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-gray-700">c. Third-Party Data</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Data from linked accounts (e.g., LinkedIn or other job platforms).</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Facilitate your job search and recommend suitable opportunities.</li>
                        <li>Allow employers to view your profile and contact you.</li>
                        <li>Provide personalized user experiences.</li>
                        <li>Improve platform performance and features.</li>
                        <li>Send updates, notifications, and promotional offers (with your consent).</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Share Your Information</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                            <span className="font-medium">Employers:</span> To facilitate job applications and interviews.
                        </li>
                        <li>
                            <span className="font-medium">Service Providers:</span> To enhance platform functionality (e.g., hosting services, analytics tools).
                        </li>
                        <li>
                            <span className="font-medium">Legal Authorities:</span> When required by law or to protect the rights and safety of our users.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h2>
                    <p className="text-gray-600">
                        We use industry-standard measures to protect your data, including encryption and secure servers. However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Access and download your data.</li>
                        <li>Update or correct inaccuracies in your personal information.</li>
                        <li>Delete your account and associated data.</li>
                        <li>Opt-out of promotional communications.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Cookies and Tracking</h2>
                    <p className="text-gray-600 mb-3">
                        We use cookies and similar technologies to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Enhance site functionality.</li>
                        <li>Analyze user behavior and preferences.</li>
                        <li>Serve relevant job recommendations and ads.</li>
                    </ul>
                    <p className="text-gray-600">
                        You can manage cookie preferences in your browser settings.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Third-Party Links</h2>
                    <p className="text-gray-600">
                        Our platform may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their privacy policies.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Children’s Privacy</h2>
                    <p className="text-gray-600">
                        Our services are not intended for individuals under the age of 16. We do not knowingly collect data from minors.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to This Policy</h2>
                    <p className="text-gray-600">
                        We may update this Privacy Policy periodically. Significant changes will be communicated via email or a notification on our platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
                    <p className="text-gray-600">
                        For questions or concerns about this Privacy Policy, please contact us:
                    </p>
                    <ul className="list-none text-gray-600">
                        <li><span className="font-medium">Email:</span> [Insert Email Address]</li>
                        <li><span className="font-medium">Phone:</span> [Insert Phone Number]</li>
                        <li><span className="font-medium">Address:</span> [Insert Address]</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
