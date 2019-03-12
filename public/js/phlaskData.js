var phlaskData = {
    tapTypes: {
        public: {
          name: "Public Tap",
          image: "https://i.imgur.com/M12e1HV.png",
          description: "Taps maintained by municipal agencies for the public benefit.",
          filterKey: "Public"
        },
        privateShared: {
          name: "Private-Shared Tap",
          image: "https://i.imgur.com/DXMMxXR.png",
          description: "Taps maintained by private enterprises, generously made available for public access.",
          filterKey: "Private-Shared"
        },
        private: {
          name: "Private Tap",
          image: "https://i.imgur.com/kt825XO.png",
          description: "Taps located in private enterprises. PHLasking for permission to access may be required.",
          filterKey: "Private"
        },
        restricted: {
          name: "Restricted Tap",
          image: "https://i.imgur.com/5NOdOyY.png",
          description: "Taps located in facilities where public access is restricted.",
          filterKey: "Restricted"
        },
        semiPublic: {
            // NOTE: This does not seem to be actively used.
            name: "Semi-Public Tap",
            image: "https://i.imgur.com/DXMMxXR.png",
            description: "Taps maintained by private enterprises, generously made available for public access.",
            filterKey: "Semi-Public"
        },
        unverified: {
            // NOTE: This is not used when initially loading taps
            name: "Unverified Tap",
            image: "https://i.imgur.com/kKXG3TO.png",
            description: "Unverified Tap",
            filterKey: "Unverified"
        },
        hosr: {
            name: "HOSR",
            image: "https://i.imgur.com/cZ3GxdF.png",
            description: "Temporary Refill Station for HOSR Regatta\nAvailable Friday, 10/26 to Sunday, 10/28",
            filterKey: "HOSR"
        }
      }
}