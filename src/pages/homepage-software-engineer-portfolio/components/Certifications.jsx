import { Search } from "lucide-react";
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const certifications = [
  {
    title: "PMI Project Management Ready",
    issuer: "Project Management Institute",
    date: "Mar 2025",
    link: "https://www.credly.com/badges/d8a55402-856b-4ad4-b2ac-f4d0584e4a18/public_url",
    logo: "https://images.credly.com/images/650208e5-851e-45d3-9ee9-cea899428427/blob",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Aug 2024",
    link: "https://www.credly.com/badges/3beb2648-b314-4dbc-bb39-a85915509959/public_url",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "Aug 2024",
    link: "https://www.credly.com/badges/d2925570-cc54-4f90-9ca1-b014628b5bef/public_url",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Information Technology Fundamentals",
    issuer: "IBM",
    date: "Aug 2024",
    link: "https://www.credly.com/badges/2b9a6299-f7f9-494f-9431-564be103b1d9/public_url",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Aug 2024",
    link: "https://www.credly.com/badges/7c3085f5-4b85-47a2-9deb-a0f5d5b3363b/public_url",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    date: "Aug 2024",
    link: "https://www.credly.com/badges/98bb9967-306b-4d0f-a8bd-a7faf9c2ce6b/public_url",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  },
  {
    title: "IT Specialist ‐ Python",
    issuer: "Certiport",
    date: "Jul 2024",
    link: "https://www.credly.com/badges/b019d607-0edb-4ba4-8f8c-5685336cdb1a/linked_in_profile",
    logo: "https://images.credly.com/images/3c4602d8-832e-4a24-b42d-00359ce746f7/ITS-Badges_Python_1200px.png",
  },
];


export default function Certifications() {
  const [query, setQuery] = useState("");

  const filtered = certifications.filter((cert) =>
    cert.title.toLowerCase().includes(query.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-12 pb-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4 soft-shadow">
            <Icon name="GraduationCap" size={16} className="mr-2" />
            Certifications
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            My Certifications
          </h2>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search certifications..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-border bg-card px-3 py-2 pl-9 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-card p-4 hover:bg-muted/30 transition"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <h3 className="font-medium text-sm text-foreground leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-2">
                Issued: {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-medium text-primary hover:underline"
              >
                Show credential
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-6 text-sm">
            No certifications found.
          </p>
        )}
      </div>
    </section>
  );
}
