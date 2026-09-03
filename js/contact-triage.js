(function () {
  "use strict";

  var form = document.getElementById("triage-form");
  if (!form) {
    return;
  }

  var typeInputs = form.querySelectorAll("[data-triage]");
  var employerBlock = document.getElementById("employer-fields");
  var candidateBlock = document.getElementById("candidate-fields");
  var laneSelect = document.getElementById("lane");
  var engagementSelect = document.getElementById("engagement");
  var contractOption = document.getElementById("engagement-contract");
  var commissioningNote = document.getElementById("commissioning-note");
  var subjectInput = document.getElementById("email-subject");
  var replyToInput = document.getElementById("reply-to");
  var nextInput = document.getElementById("form-next");
  var triageLabel = document.getElementById("triage-label");

  function selectedTypeInput() {
    return form.querySelector("[data-triage]:checked");
  }

  function selectedTriage() {
    var input = selectedTypeInput();
    return input ? input.getAttribute("data-triage") : "";
  }

  function isCommissioning() {
    return laneSelect && laneSelect.value === "Permanent commissioning manager";
  }

  function setBlockState(block, active) {
    if (!block) {
      return;
    }

    var fields = block.querySelectorAll("input, select, textarea");
    var i;
    var field;

    for (i = 0; i < fields.length; i += 1) {
      field = fields[i];
      field.disabled = !active;
      if (field.dataset.optional === "true") {
        field.required = false;
      } else if (field.type !== "hidden") {
        field.required = active;
      }
    }
  }

  function syncCommissioning() {
    var lock = Boolean(employerBlock && !employerBlock.hidden && isCommissioning());

    if (engagementSelect && lock) {
      engagementSelect.value = "Permanent / staff";
    }
    if (contractOption) {
      contractOption.disabled = lock;
    }
    if (commissioningNote) {
      commissioningNote.hidden = !lock;
    }
  }

  function subjectPrefix() {
    var triage = selectedTriage();
    var lane;

    if (triage === "candidate") {
      return "[Candidate]";
    }
    if (triage === "employer") {
      lane = laneSelect && laneSelect.value ? laneSelect.value : "Employer";
      return "[Employer · " + lane + "]";
    }
    return "[Enquiry]";
  }

  function syncSubject() {
    var prefix = subjectPrefix();
    if (subjectInput) {
      subjectInput.value = prefix + " Gas and Oil Recruitment brief";
    }
    if (triageLabel) {
      triageLabel.value = prefix;
    }
  }

  function syncReplyTo() {
    var triage = selectedTriage();
    var emailField;

    if (!replyToInput) {
      return;
    }

    emailField = triage === "candidate"
      ? document.getElementById("candidate-email")
      : document.getElementById("work-email");

    replyToInput.value = emailField && !emailField.disabled ? emailField.value.trim() : "";
  }

  function syncNext() {
    if (nextInput) {
      nextInput.value = window.location.origin + "/contact/sent/";
    }
  }

  function syncForm() {
    var triage = selectedTriage();
    var employer = triage === "employer";
    var candidate = triage === "candidate";

    if (employerBlock) {
      employerBlock.hidden = !employer;
    }
    if (candidateBlock) {
      candidateBlock.hidden = !candidate;
    }

    setBlockState(employerBlock, employer);
    setBlockState(candidateBlock, candidate);
    syncCommissioning();
    syncSubject();
  }

  var i;
  for (i = 0; i < typeInputs.length; i += 1) {
    typeInputs[i].addEventListener("change", syncForm);
  }

  if (laneSelect) {
    laneSelect.addEventListener("change", function () {
      syncCommissioning();
      syncSubject();
    });
  }

  form.addEventListener("submit", function () {
    syncSubject();
    syncReplyTo();
    syncNext();
  });

  syncForm();
  syncNext();
}());
