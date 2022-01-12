> let soliloquy = "To be, or not to be, that is the question:";
> soliloquy.includes("To be");        // Does it include the substring "To be"?
true
> soliloquy.includes("question");     // What about "question"?
true
> soliloquy.includes("nonexistent");  // This string doesn't appear.
false
> soliloquy.includes("TO BE");        // String inclusion is case-sensitive.
false
> soliloquy.includes("To be", 1);     // Can you guess what this one means?
false
> soliloquy.includes("o be,", 1);     // A hint for the previous one
true
