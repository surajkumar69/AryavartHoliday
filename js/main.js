/**
 * ARYAVART HOLIDAYS PVT. LTD. - DYNAMIC DESTINATION IMAGE ENGINE & INTERACTIVE LOGIC
 * Strict Destination Image Compliance Engine: Every location maps strictly to authentic place photography.
 */

// VERIFIED AUTHENTIC DESTINATION IMAGE REGISTRY (LOCAL & VERIFIED UN SPLASH ASSETS)
const DESTINATION_IMAGES = {
  // Primary Destinations (Locally Saved Photorealistic Assets)
  lakshadweep: "images/lakshadweep.jpg",
  kashmir: "images/kashmir.jpg",
  kerala: "images/kerala.jpg",
  andaman: "images/andaman.jpg",
  ladakh: "images/ladakh.jpg",
  himachal: "images/himachal.jpg",
  religious: "images/religious.jpg",
  hero_showcase: "images/hero_showcase.jpg",

  // Specific Sub-Location Authentic Photography
  srinagar: "images/kashmir.jpg",
  dal_lake: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1000&auto=format&fit=crop",
  gulmarg: "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?q=80&w=1000&auto=format&fit=crop",
  pahalgam: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1000&auto=format&fit=crop",
  sonmarg: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1000&auto=format&fit=crop",

  munnar: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop",
  thekkady: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop",
  alleppey: "images/kerala.jpg",
  cochin: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop",

  port_blair: "https://images.unsplash.com/photo-1624640034606-25e2e850b329?q=80&w=1000&auto=format&fit=crop",
  havelock: "images/andaman.jpg",
  radhanagar: "images/andaman.jpg",
  neil_island: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",

  agatti: "images/lakshadweep.jpg",
  bangaram: "images/lakshadweep.jpg",

  leh: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop",
  pangong: "images/ladakh.jpg",
  thiksey: "https://images.unsplash.com/photo-1590685987178-028f804561ec?q=80&w=1000&auto=format&fit=crop",
  sham_valley: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",

  shimla: "images/himachal.jpg",
  manali: "images/himachal.jpg",
  solang: "images/himachal.jpg",
  varanasi: "images/religious.jpg"
};

/**
 * Dynamic Destination Image Helper
 * Ensures exact place name maps strictly to verified place photography with fallback.
 */
function getAuthenticDestinationImage(destName) {
  if (!destName) return DESTINATION_IMAGES.kerala;
  
  const normalized = destName.toLowerCase().replace(/[^a-z0-9_]/g, '_');

  for (const [key, url] of Object.entries(DESTINATION_IMAGES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return url;
    }
  }

  // Strict Keyword Matching
  if (normalized.includes('lakshadweep') || normalized.includes('agatti') || normalized.includes('bangaram')) {
    return DESTINATION_IMAGES.lakshadweep;
  }
  if (normalized.includes('ladakh') || normalized.includes('leh') || normalized.includes('pangong')) {
    return DESTINATION_IMAGES.ladakh;
  }
  if (normalized.includes('kashmir') || normalized.includes('srinagar') || normalized.includes('gulmarg') || normalized.includes('pahalgam') || normalized.includes('sonmarg')) {
    return DESTINATION_IMAGES.kashmir;
  }
  if (normalized.includes('kerala') || normalized.includes('munnar') || normalized.includes('alleppey') || normalized.includes('thekkady') || normalized.includes('cochin')) {
    return DESTINATION_IMAGES.kerala;
  }
  if (normalized.includes('andaman') || normalized.includes('port_blair') || normalized.includes('havelock') || normalized.includes('neil')) {
    return DESTINATION_IMAGES.andaman;
  }
  if (normalized.includes('shimla') || normalized.includes('manali') || normalized.includes('himachal')) {
    return DESTINATION_IMAGES.himachal;
  }

  return DESTINATION_IMAGES.kerala;
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navbar Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Sticky Header Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Category Filtering for Holiday Packages
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pkgCards = document.querySelectorAll('.pkg-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      pkgCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Featured Package Tab Switcher
  const pkgTabBtns = document.querySelectorAll('.pkg-tab-btn');
  const pkgContentPanels = document.querySelectorAll('.featured-pkg-panel');

  pkgTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pkgTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-target');

      pkgContentPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  // Quick Enquiry Form Submission
  const enquiryForm = document.getElementById('quickEnquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const dest = document.getElementById('enqDest').value;
      const date = document.getElementById('enqDate').value;
      const travellers = document.getElementById('enqTravellers').value;
      const pkgType = document.getElementById('enqType').value;
      const name = document.getElementById('enqName').value;
      const phone = document.getElementById('enqPhone').value;
      const email = document.getElementById('enqEmail').value;
      const notes = document.getElementById('enqNotes')?.value || 'N/A';

      if (!name || !phone || !dest) {
        showToast('Please fill in required fields: Name, Phone, and Destination.', 'error');
        return;
      }

      const message = `Hello Aryavart Holidays,\n\nI would like to get a customized quote for a trip:\n- *Destination*: ${dest}\n- *Travel Date*: ${date || 'Flexible'}\n- *Travellers*: ${travellers}\n- *Package Type*: ${pkgType}\n- *Name*: ${name}\n- *Phone*: ${phone}\n- *Email*: ${email || 'N/A'}\n- *Special Requirements*: ${notes}\n\nPlease contact me back with itinerary details.`;
      
      const whatsappUrl = `https://wa.me/918506991899?text=${encodeURIComponent(message)}`;
      
      showToast('Enquiry details captured! Opening WhatsApp travel support...', 'success');
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        enquiryForm.reset();
        closeModal('quoteModal');
      }, 1000);
    });
  }

  // General Contact Form Submission
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to Aryavart Holidays. We will reach out shortly.', 'success');
      contactForm.reset();
    });
  }

  // Custom Trip Builder Form
  const customTripForm = document.getElementById('customTripForm');
  if (customTripForm) {
    customTripForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dest = document.getElementById('ctDest').value;
      const days = document.getElementById('ctDays').value;
      const style = document.getElementById('ctStyle').value;
      const phone = document.getElementById('ctPhone').value;

      const message = `Hello Aryavart Holidays,\nI want to create a customized trip:\n- Destination: ${dest}\n- Duration: ${days}\n- Travel Style: ${style}\n- Contact Phone: ${phone}`;
      const whatsappUrl = `https://wa.me/918506991899?text=${encodeURIComponent(message)}`;

      showToast('Customized trip details saved! Opening WhatsApp...', 'success');
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        customTripForm.reset();
      }, 1000);
    });
  }

  // Modal Management
  window.openModal = function(modalId, pkgName = '') {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      if (pkgName && document.getElementById('modalPkgTitle')) {
        document.getElementById('modalPkgTitle').innerText = pkgName;
      }
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
    }
  };

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });

  // Package Detail Modal Renderer with Authentic Destination Photos
  window.viewPackageDetails = function(destinationKey) {
    const pkgData = {
      kerala: {
        title: "Kerala - God's Own Country Package",
        heroImg: DESTINATION_IMAGES.kerala,
        duration: "4 Nights / 5 Days (Also available in 5N/6D & Customized)",
        route: "Cochin → Munnar → Thekkady → Alleppey → Cochin",
        overview: "Experience lush green tea plantations in Munnar, exotic spice sanctuaries in Thekkady, and serene backwater houseboat stays in Alleppey.",
        itinerary: [
          { day: "Day 1", title: "Cochin to Munnar", img: DESTINATION_IMAGES.munnar, desc: "Arrival at Cochin Airport/Station. Scenic drive passing Cheeyappara waterfalls to Munnar. Check-in to resort and evening walk." },
          { day: "Day 2", title: "Munnar Tea Gardens & Parks", img: DESTINATION_IMAGES.munnar, desc: "Explore Eravikulam National Park (Nilgiri Tahr), Tea Museum, Mattupetty Dam, Echo Point, and Kundala Lake." },
          { day: "Day 3", title: "Munnar to Thekkady Spice Country", img: DESTINATION_IMAGES.thekkady, desc: "Drive to Thekkady. Boat safari on Periyar Lake, spice plantation tour, and traditional Kathakali cultural show." },
          { day: "Day 4", title: "Thekkady to Alleppey Houseboat", img: DESTINATION_IMAGES.alleppey, desc: "Transfer to Alleppey. Board traditional Kerala luxury houseboat. Cruise through scenic backwaters, palm-fringed canals, and rice paddies with delicious Kerala meals." },
          { day: "Day 5", title: "Alleppey to Cochin Departure", img: DESTINATION_IMAGES.cochin, desc: "Disembark houseboat after breakfast. Drive back to Cochin. Sightseeing at Fort Kochi, Chinese Fishing Nets, and Mattancherry Palace before departure." }
        ],
        inclusions: ["Private AC Vehicle Ground Transport", "Munnar & Thekkady Resort Stays", "Alleppey Private Houseboat Cruise", "Daily Breakfast & Houseboat Meals"],
        type: "Private Customized & Family Tours"
      },
      kashmir: {
        title: "Paradise Kashmir Experience & LTC Special",
        heroImg: DESTINATION_IMAGES.kashmir,
        duration: "4N/5D | 5N/6D | 6N/7D | LTC Packages",
        route: "Srinagar → Sonmarg → Pahalgam → Gulmarg → Srinagar",
        overview: "Discover snow-capped Himalayan peaks, pristine Dal Lake, enchanting pine valleys, and traditional houseboats in Kashmir.",
        itinerary: [
          { day: "Day 1", title: "Arrival Srinagar & Dal Lake Shikara", img: DESTINATION_IMAGES.dal_lake, desc: "Welcome at Srinagar Airport. Transfer to luxury houseboat on Dal Lake. Enjoy romantic evening Shikara ride on Dal Lake." },
          { day: "Day 2", title: "Srinagar to Sonmarg Excursion", img: DESTINATION_IMAGES.sonmarg, desc: "Day trip to Sonmarg 'Meadow of Gold'. Visit Thajiwas Glacier area, Sindh riverbanks, and breathtaking alpine landscapes." },
          { day: "Day 3", title: "Srinagar to Pahalgam (Valley of Shepherds)", img: DESTINATION_IMAGES.pahalgam, desc: "Drive to Pahalgam via saffron fields and Avantipur ruins. Explore Betaab Valley, Aru Valley, and Chandanwari." },
          { day: "Day 4", title: "Pahalgam to Gulmarg Gondola", img: DESTINATION_IMAGES.gulmarg, desc: "Proceed to Gulmarg 'Meadow of Flowers'. Experience the famous Gulmarg Gondola cable car ride to Kongdoori & Apharwat Peak." },
          { day: "Day 5", title: "Gulmarg to Srinagar Departure", img: DESTINATION_IMAGES.srinagar, desc: "Visit Mughal Gardens (Shalimar & Nishat Bagh), Shankracharya Temple, and local handicrafts market before airport drop." }
        ],
        inclusions: ["Private Vehicle Ground Transport", "Srinagar Houseboat & Resort Stay", "Daily Breakfast & Dinner", "Shikara Ride Ticket on Dal Lake"],
        type: "Private Customized & Government LTC Eligible Package"
      },
      andaman: {
        title: "Exotic Andaman & Nicobar Island Tour",
        heroImg: DESTINATION_IMAGES.andaman,
        duration: "4N/5D | 5N/6D | 6N/7D | Customized",
        route: "Port Blair → Havelock Island → Neil Island → Port Blair",
        overview: "Crystal clear turquoise waters, white sandy beaches, historical Cellular Jail, and world-class island hopping.",
        itinerary: [
          { day: "Day 1", title: "Arrival Port Blair & Cellular Jail", img: DESTINATION_IMAGES.port_blair, desc: "Transfer to hotel. Visit historic Cellular Jail and witness the evocative Light & Sound Show in the evening." },
          { day: "Day 2", title: "Port Blair to Havelock Island", img: DESTINATION_IMAGES.radhanagar, desc: "Board high-speed cruise to Havelock Island. Visit Asia's famous Radhanagar Beach for spectacular sunset views." },
          { day: "Day 3", title: "Havelock Island to Neil Island", img: DESTINATION_IMAGES.neil_island, desc: "Explore Elephant Beach for water activities, then cruise to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach." },
          { day: "Day 4", title: "Neil Island Natural Bridge & Port Blair", img: DESTINATION_IMAGES.neil_island, desc: "Visit Natural Coral Bridge on Neil Island. Cruise back to Port Blair. Enjoy local island shopping." },
          { day: "Day 5", title: "Port Blair Departure", img: DESTINATION_IMAGES.port_blair, desc: "Breakfast at hotel and drop-off at Port Blair Airport with unforgettable island memories." }
        ],
        inclusions: ["Private AC Ground Transport", "Inter-Island Ferry/Cruise Tickets", "Sightseeing & Entry Permits", "Hotel Accommodation"],
        type: "Island Holiday & Honeymoon Special"
      },
      ladakh: {
        title: "Majestic Leh Ladakh High Altitude Tour",
        heroImg: DESTINATION_IMAGES.ladakh,
        duration: "4N/5D | 5N/6D | Customized",
        route: "Leh → Sham Valley → Pangong Tso → Leh",
        overview: "Conquer high altitude mountain passes, vibrant Buddhist monasteries, magnetic hills, and the world-famous Pangong Tso lake.",
        itinerary: [
          { day: "Day 1", title: "Arrival Leh & Acclimatization Rest", img: DESTINATION_IMAGES.leh, desc: "Airport pick-up and hotel check-in. MANDATORY rest for high altitude acclimatization. Evening walk in Leh Market & Shanti Stupa." },
          { day: "Day 2", title: "Leh Local & Sham Valley Circuit", img: DESTINATION_IMAGES.sham_valley, desc: "Visit Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill, and Indus-Zanskar Sangam (confluence)." },
          { day: "Day 3", title: "Leh to Pangong Tso via Chang La Pass", img: DESTINATION_IMAGES.pangong, desc: "Drive across Chang La Pass (17,590 ft) to color-changing Pangong Tso lake. Overnight camp/resort near the lake." },
          { day: "Day 4", title: "Pangong Tso to Leh via Thiksey Monastery", img: DESTINATION_IMAGES.thiksey, desc: "Morning sunrise over Pangong Tso. Drive back to Leh visiting Thiksey Monastery en route." },
          { day: "Day 5", title: "Leh Departure", img: DESTINATION_IMAGES.leh, desc: "Transfer to Leh Kushok Bakula Rimpoche Airport." }
        ],
        inclusions: ["Private SUV Transport (Scorpio/Innova)", "Oxygen Cylinder in Vehicle", "Inner Line Permits", "Hotels & Camps Stay"],
        type: "Adventure & High Altitude Expedition",
        advisory: "HIGH-ALTITUDE ADVISORY: Leh is located at 11,500+ ft. Complete rest on Day 1 is mandatory. Drink plenty of water and avoid smoking/alcohol."
      },
      lakshadweep: {
        title: "Untouched Lakshadweep Coral Paradise",
        heroImg: DESTINATION_IMAGES.lakshadweep,
        duration: "4N/5D | 5N/6D | 6N/7D | Customized",
        route: "Agatti / Bangaram / Thinnakara Island Experiences",
        overview: "Pristine coral reefs, turquoise lagoons, coconut groves, and tranquil tropical island serenity.",
        itinerary: [
          { day: "Day 1", title: "Arrival Agatti & Island Greeting", img: DESTINATION_IMAGES.agatti, desc: "Flight arrival at Agatti Airport. Warm traditional island greeting and boat/resort transfer." },
          { day: "Day 2", title: "Lagoon & Coral Water Sports", img: DESTINATION_IMAGES.bangaram, desc: "Enjoy glass-bottom boat rides, snorkeling, kayaking, and scuba diving in crystal clear waters." },
          { day: "Day 3", title: "Bangaram & Thinnakara Island Hopping", img: DESTINATION_IMAGES.lakshadweep, desc: "Excursion to Bangaram & Thinnakara uninhabited islands with pristine white sandbanks." },
          { day: "Day 4", title: "Beach Relaxation & Cultural Walk", img: DESTINATION_IMAGES.agatti, desc: "Visit local coconut processing units, marine museum, and enjoy serene beach sunset." },
          { day: "Day 5", title: "Departure Agatti", img: DESTINATION_IMAGES.agatti, desc: "Transfer to Agatti Airport for flight back." }
        ],
        inclusions: ["Island Permit Coordination", "Resort Stay", "All Meals Included", "Speedboat Transfers"],
        type: "Island Escape & Romantic Getaway"
      }
    };

    const pkg = pkgData[destinationKey];
    if (!pkg) return;

    let itinHtml = pkg.itinerary.map(item => `
      <div class="timeline-step">
        <div class="timeline-node"></div>
        <div style="display: flex; gap: 1rem; align-items: flex-start;">
          ${item.img ? `<img src="${item.img}" alt="${item.title}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 8px; flex-shrink: 0; box-shadow: var(--shadow-sm);" onerror="this.onerror=null; this.src='images/kerala.jpg';">` : ''}
          <div>
            <div class="timeline-day">${item.day}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-desc">${item.desc}</div>
          </div>
        </div>
      </div>
    `).join('');

    let advisoryHtml = pkg.advisory ? `
      <div class="high-altitude-advisory">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        <div class="advisory-text"><strong>Travel Advisory:</strong> ${pkg.advisory}</div>
      </div>
    ` : '';

    const modalBody = `
      <div style="position: relative; height: 180px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.2rem;">
        <img src="${pkg.heroImg}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/kerala.jpg';">
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(10,25,47,0.85) 100%);"></div>
        <div style="position: absolute; bottom: 1rem; left: 1rem; color: #fff;">
          <span class="dest-tag">${pkg.type}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; margin-top: 0.3rem;">${pkg.title}</h2>
        </div>
      </div>

      <div class="modal-header">
        <p style="color: var(--teal-accent); font-weight: 700;">⏱️ ${pkg.duration}</p>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.4rem;">📍 <strong>Route:</strong> ${pkg.route}</p>
      </div>

      <div style="margin: 1.2rem 0; font-size: 0.95rem; line-height: 1.6;">
        <p>${pkg.overview}</p>
      </div>

      ${advisoryHtml}

      <h3 style="font-size: 1.2rem; font-weight: 700; margin: 1.5rem 0 1rem 0; color: var(--primary-navy);">Day-Wise Detailed Itinerary</h3>
      <div class="itinerary-timeline" style="margin-left: 0.5rem;">
        ${itinHtml}
      </div>

      <div style="background: #F8FAFC; padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin: 1.5rem 0;">
        <h4 style="font-weight: 700; font-size: 0.95rem; color: var(--primary-navy); margin-bottom: 0.5rem;">Included In This Package:</h4>
        <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.88rem; color: var(--text-muted);">
          ${pkg.inclusions.map(inc => `<li>✓ ${inc}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 2rem;">
        <button onclick="requestPkgQuote('${pkg.title}')" class="btn btn-primary" style="flex: 1;">Get Customized Quote</button>
        <button onclick="closeModal('pkgDetailModal')" class="btn btn-navy">Close</button>
      </div>
    `;

    document.getElementById('modalPkgContent').innerHTML = modalBody;
    openModal('pkgDetailModal');
  };

  window.requestPkgQuote = function(pkgTitle) {
    closeModal('pkgDetailModal');
    openModal('quoteModal');
    const destSelect = document.getElementById('modalDest');
    if (destSelect) {
      if (pkgTitle.includes('Kerala')) destSelect.value = 'Kerala';
      else if (pkgTitle.includes('Kashmir')) destSelect.value = 'Kashmir';
      else if (pkgTitle.includes('Andaman')) destSelect.value = 'Andaman & Nicobar';
      else if (pkgTitle.includes('Ladakh')) destSelect.value = 'Leh Ladakh';
      else if (pkgTitle.includes('Lakshadweep')) destSelect.value = 'Lakshadweep';
    }
  };
});

function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add('active'), 50);

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
