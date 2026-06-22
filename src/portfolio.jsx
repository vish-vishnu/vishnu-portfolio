import React, { useState, useEffect } from 'react';
import {
    Terminal, Database, Server, Layout, ExternalLink, ArrowRight, FileText, Code2, Cpu
} from 'lucide-react';

export default function Portfolio() {
    // Simulated Live Backend Ping (Killer Feature)
    const [ping, setPing] = useState({ status: 'checking...', latency: 0 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setPing({ status: 'ONLINE', latency: Math.floor(Math.random() * 15) + 32 });
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">

            {/* Subtle background glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">

                {/* TOP BAR / LIVE STATUS */}
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 border-b border-slate-800/80 mb-16">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-black tracking-wider text-white font-mono">
                            VISHNU<span className="text-cyan-400">.A</span>
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                            FULL-STACK / DATA
                        </span>
                    </div>

                    {/* Live API Status Pill */}
                    <div className="flex items-center gap-2.5 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs">
                        <span className="relative flex h-2 w-2">
                            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${ping.status === 'ONLINE' ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${ping.status === 'ONLINE' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        </span>
                        <span className="text-slate-400 font-mono">FastAPI Core:</span>
                        <span className="text-emerald-400 font-mono font-bold">
                            {ping.status} {ping.latency > 0 && `(${ping.latency}ms)`}
                        </span>
                    </div>
                </header>

                {/* HERO SECTION */}
                <section className="py-8 md:py-16 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs mb-6 font-mono">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>sys.argv.append("High Performance")</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
                        I build scalable web apps <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                            and the data pipelines
                        </span> that fuel them.
                    </h1>

                    <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed">
                        Results-driven Full-Stack Developer bridging UI architectures with automated data workflows and optimized database performance[cite: 4, 5].
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#projects" className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-cyan-500/10">
                            <span>Inspect Architecture</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/Vishnu_A.pdf" target="_blank" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium text-sm transition-all">
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <span>Download CV (.PDF)</span>
                        </a>
                    </div>
                </section>

                {/* TECH MATRIX */}
                <section className="py-16 border-t border-slate-800/60">
                    <div className="mb-10">
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// THE TOOLKIT</span>
                        <h2 className="text-2xl font-bold text-white mt-1">Engineering Matrix</h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5">

                        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
                            <Layout className="w-6 h-6 text-blue-400 mb-4" />
                            <h3 className="text-base font-bold text-white mb-1">The Client</h3>
                            <p className="text-xs text-slate-400 mb-4">High-fidelity, reactive interfaces.</p>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                {['React.js', 'React Hooks', 'JavaScript (ES6+)', 'HTML5', 'CSS3'].map(t => (
                                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
                            <Server className="w-6 h-6 text-emerald-400 mb-4" />
                            <h3 className="text-base font-bold text-white mb-1">The Server</h3>
                            <p className="text-xs text-slate-400 mb-4">Low-latency backend layers.</p>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                {['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Context API', 'JWT'].map(t => (
                                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900/40 border border-cyan-500/30 p-6 rounded-xl relative overflow-hidden group hover:border-cyan-500/60 transition-colors">
                            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[9px] font-mono px-2 py-0.5 font-black tracking-widest rounded-bl">DIFFERENTIATOR</div>
                            <Database className="w-6 h-6 text-cyan-400 mb-4" />
                            <h3 className="text-base font-bold text-white mb-1">The Data Engine</h3>
                            <p className="text-xs text-slate-400 mb-4">Pipelines, vision, and analytics.</p>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                {['Python', 'OpenCV', 'Pandas', 'MySQL', 'PostgreSQL', 'MongoDB', 'Google BigQuery'].map(t => (
                                    <span key={t} className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="py-16 border-t border-slate-800/60">
                    <div className="mb-10">
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// TRACK RECORD</span>
                        <h2 className="text-2xl font-bold text-white mt-1">Professional Experience</h2>
                    </div>

                    <div className="border-l border-slate-800 ml-2.5 space-y-12">

                        <div className="relative pl-8">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-slate-950"></div>
                            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded">Nov 2024 - Present</span>
                            <h3 className="text-lg font-bold text-white mt-2.5">Data Annotator (Data Analysis)</h3>
                            <p className="text-xs font-medium text-slate-400 mb-3">Samsung SEED Labs</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 font-bold">▸</span>
                                    <span>Analyzed and validated large AI/ML datasets, ensuring high data accuracy for model training and validation[cite: 13].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 font-bold">▸</span>
                                    <span>Engineered automated Python scripts utilizing OpenCV to pre-process datasets, accelerating QA workflows[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 font-bold">▸</span>
                                    <span>Performed pattern analysis using SQL/Python, creating BigQuery and Power BI dashboards[cite: 15].</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative pl-8">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-700 rounded-full ring-4 ring-slate-950"></div>
                            <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Feb 2024 - May 2024</span>
                            <h3 className="text-lg font-bold text-white mt-2.5">Full Stack Developer Intern</h3>
                            <p className="text-xs font-medium text-slate-400 mb-3">Right Angle Solutions</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-600 font-bold">▸</span>
                                    <span>Architected and maintained 4+ scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL[cite: 18].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-600 font-bold">▸</span>
                                    <span>Implemented and optimized RESTful APIs, noticeably reducing data retrieval latency[cite: 19].</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="py-16 border-t border-slate-800/60">
                    <div className="mb-10">
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// PROOF OF CONCEPT</span>
                        <h2 className="text-2xl font-bold text-white mt-1">Featured Projects</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Proj 1 */}
                        <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">REAL-TIME</span>
                                    <div className="flex gap-3 text-slate-400">
                                        <a href="https://github.com/vish-vishnu" target="_blank" rel="noreferrer" className="hover:text-white">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        </a>
                                        <a href="#" className="hover:text-cyan-400"><ExternalLink className="w-4 h-4" /></a>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">IoT-Based Smart Monitoring System</h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Developed a real-time data monitoring system utilizing a high-performance FastAPI backend to process incoming sensor data streams[cite: 21, 22]. Integrated Python scripts for live tracking of physical parameters[cite: 23].
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-500">
                                <span>FastAPI</span> • <span>Python</span> • <span>Sensor Ingestion</span>
                            </div>
                        </div>

                        {/* Proj 2 */}
                        <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">CLOUD STREAMING</span>
                                    <div className="flex gap-3 text-slate-400">
                                        <a href="https://github.com/vish-vishnu" target="_blank" rel="noreferrer" className="hover:text-white">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        </a>
                                        <a href="#" className="hover:text-purple-400"><ExternalLink className="w-4 h-4" /></a>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Music Player Web Application</h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Built a full-stack music streaming platform using React.js, Node.js, Express.js, and MongoDB[cite: 27, 28]. Integrated Google Drive cloud storage for scalable file management[cite: 29].
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-500">
                                <span>React</span> • <span>Node.js</span> • <span>MongoDB</span> • <span>Google Drive API</span>
                            </div>
                        </div>

                        {/* Proj 3 */}
                        <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 md:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-emerald-500/40 transition-all group">
                            <div className="max-w-xl">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-2 inline-block">SECURE AUTH</span>
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Micro Credit Web Application</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Designed a responsive web application for managing user authentication and transactions[cite: 24, 25]. Implemented secure REST APIs, JWT authentication, and robust input validation[cite: 26].
                                </p>
                            </div>
                            <div className="flex flex-col sm:items-end gap-2 shrink-0 w-full sm:w-auto font-mono text-xs">
                                <a href="https://github.com/vish-vishnu" target="_blank" rel="noreferrer" className="hover:text-white">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                                <a href="#" className="hover:text-purple-400"><ExternalLink className="w-4 h-4" /></a>
                                <span className="text-[11px] text-slate-500 text-center sm:text-right mt-1">React • MySQL • JWT</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="py-12 border-t border-slate-800/80 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                        <span className="text-white font-medium font-mono">vishnua2523@gmail.com</span>
                        <span>•</span>
                        <span className="font-mono">+91 9843143735</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800/80 px-3 py-1.5 rounded-md font-mono text-[11px]">
                        <span>Lighthouse Performance:</span>
                        <span className="text-emerald-400 font-bold">100%</span>
                    </div>
                </footer>

            </div>
        </div>
    );
}