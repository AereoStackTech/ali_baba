'use client';

import React from 'react';
import { Flame, Heart, Award, Sparkles, Utensils, ShieldCheck } from 'lucide-react';

export function SafiStorySection() {
  return (
    <section id="story" className="py-14 sm:py-20 border-b border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wide">
              <span>L’Esprit du Snack Populaire</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Safi, Maroc</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Une Histoire de Braise, d’Épices et de Générosité à Safi
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              À Safi, la culture du snack de quartier est bien plus qu’une simple restauration rapide : 
              c’est un véritable point de ralliement pour les étudiants du Plateau, les familles en balade 
              et les travailleurs en quête d’un repas savoureux, chaud et réconfortant.
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Chez <strong className="text-stone-200">Ali Baba Grill & Shawarma</strong>, nous préparons nos marinades chaque 
              matin avec des épices sélectionnées (cumin torréfié, paprika doux de la région, ail frais et coriandre). 
              La viande est découpée finement à la commande sur notre broche rotative, offrant ce croustillant doré 
              incomparable qui fait notre réputation locale.
            </p>

            {/* Quality Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-stone-900 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Cuisson au Feu</h3>
                <p className="text-xs text-stone-400">
                  Broche rôtie dorée et grillades saisies sur braises ardentes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Hygiène Irréprochable</h3>
                <p className="text-xs text-stone-400">
                  Plan de travail ouvert, viandes fraîches contrôlées chaque jour.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-white/5 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Prix Pour Tous</h3>
                <p className="text-xs text-stone-400">
                  Formules accessibles de 1 à 50 MAD sans jamais rogner sur la portion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Safi Local Context Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/40 border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Ancrage Local
                </span>
                <h3 className="text-xl font-bold text-white">
                  Au Cœur du Quartier Plateau à Safi
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Idéalement situé sur le Boulevard Kennedy, à proximité des collèges, lycées et facultés, 
                  notre comptoir vous accueille dans une ambiance conviviale du déjeuner jusqu’au cœur de la nuit.
                </p>
              </div>

              {/* Local Key Metrics (Clean tabular figures, anti-slop) */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">Ouverture :</span>
                  <span className="font-bold text-stone-200">7 jours sur 7 non-stop</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">Capacité sur place :</span>
                  <span className="font-bold text-stone-200">45 places assises & terrasse</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">Temps moyen de service :</span>
                  <span className="font-bold text-amber-400 tabular-nums">12 minutes</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">Fourchette de tarifs :</span>
                  <span className="font-bold text-amber-400 tabular-nums">1 à 50 MAD</span>
                </div>
              </div>

              {/* Customer Quote */}
              <blockquote className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-stone-300 italic">
                « Le meilleur plan shawarma à Safi après les cours ou la plage de Sidi Bouzid. Pain croustillant, sauces généreuses et service toujours souriant. »
                <span className="block mt-2 font-semibold not-italic text-amber-400">
                  — Yassine E., Client fidèle du Plateau
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
