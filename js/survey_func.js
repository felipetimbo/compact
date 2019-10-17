	/*  Wizard */
	jQuery(function ($) {
		"use strict";
		$('form#wrapped').attr('action', 'survey.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				
				var q3 = document.getElementById("q3");
 
				// if ($("#question_2").text() == 'No')
				//     state.stepsComplete = state.stepsPossible

					// }
				// 	// q3.classList.remove("step");
				// 	// q3.remove()
				// 	document.getElementById("next").click()
				// else
				//     q3.classList.add("step");
					
				var inputs = $(this).wizard('state').step.find(':input');
				return !inputs.length || !!inputs.valid();
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
		//  progress bar
		$("#progressbar").progressbar();
		$("#wizard_container").wizard({
			afterSelect: function (event, state) {
				$("#progressbar").progressbar("value", state.percentComplete);
				$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
				// updateResult();
				if (state.stepsComplete == state.stepsPossible)
					document.getElementById("previous").style.display = "none";
					
				if ($("#question_2").text() == 'Yes' && state.stepsComplete == 2 ){
					document.getElementById("q3").style.display = "none";
					document.getElementById("q3yes").classList.remove('required');
					document.getElementById("q3no").classList.remove('required');
					document.getElementById("q3summary").style.display = "none";
					document.getElementById("next").click();

					document.getElementById("q4").style.display = "none";
					document.getElementById("q4pure").classList.remove('required');
					document.getElementById("q4bilateral").classList.remove('required');
					document.getElementById("q4restricted").classList.remove('required');
					document.getElementById("q4contralateral").classList.remove('required');
					document.getElementById("q4summary").style.display = "none";
					document.getElementById("next").click();

					document.getElementById("q5").style.display = "none";
					document.getElementById("q5ataxic").classList.remove('required');
					document.getElementById("q5pure").classList.remove('required');
					document.getElementById("q5bilateral").classList.remove('required');
					document.getElementById("q5restricted").classList.remove('required');
					document.getElementById("q5clumsy").classList.remove('required');
					document.getElementById("q5contralateral").classList.remove('required');
					document.getElementById("q5summary").style.display = "none";
					document.getElementById("next").click();
					
					document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction.";
                    
				}
				if ($("#question_3").text() == 'Yes' && state.stepsComplete == 3 ){
					document.getElementById("q4").style.display = "none";
					document.getElementById("q4pure").classList.remove('required');
					document.getElementById("q4bilateral").classList.remove('required');
					document.getElementById("q4restricted").classList.remove('required');
					document.getElementById("q4contralateral").classList.remove('required');
					document.getElementById("q4summary").style.display = "none";
					document.getElementById("next").click();

					document.getElementById("q5").style.display = "none";
					document.getElementById("q5ataxic").classList.remove('required');
					document.getElementById("q5pure").classList.remove('required');
					document.getElementById("q5bilateral").classList.remove('required');
					document.getElementById("q5restricted").classList.remove('required');
					document.getElementById("q5clumsy").classList.remove('required');
					document.getElementById("q5contralateral").classList.remove('required');
					document.getElementById("q5summary").style.display = "none";
					document.getElementById("next").click();

					document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction.";
				}
				if ($("#question_3").text() == 'No' && state.stepsComplete == 3 ){
                    if($("#question_1").text() == 'Motor'){
                        document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("previous").style.display = "none";
						document.getElementById("next").click();
					}
					if($("#question_1").text() == 'Sensory, Motor'){
						document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("q5").style.display = "none";
						document.getElementById("q5ataxic").classList.remove('required');
						document.getElementById("q5pure").classList.remove('required');
						document.getElementById("q5bilateral").classList.remove('required');
						document.getElementById("q5restricted").classList.remove('required');
						document.getElementById("q5clumsy").classList.remove('required');
						document.getElementById("q5contralateral").classList.remove('required');
						document.getElementById("q5summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("result").innerHTML = "LACI – Lacunar Infarct.";
					}

                    if($("#question_1").text() == 'Higher cerebral functions'){
						document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("q5").style.display = "none";
						document.getElementById("q5ataxic").classList.remove('required');
						document.getElementById("q5pure").classList.remove('required');
						document.getElementById("q5bilateral").classList.remove('required');
						document.getElementById("q5restricted").classList.remove('required');
						document.getElementById("q5clumsy").classList.remove('required');
						document.getElementById("q5contralateral").classList.remove('required');
						document.getElementById("q5summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("result").innerHTML = "PACI – Partial Anterior Circulation Infarct. <br /> HCF: Pure.";
					}

					if($("#question_1").text() == 'Hemianopia'){
						document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("q5").style.display = "none";
						document.getElementById("q5ataxic").classList.remove('required');
						document.getElementById("q5pure").classList.remove('required');
						document.getElementById("q5bilateral").classList.remove('required');
						document.getElementById("q5restricted").classList.remove('required');
						document.getElementById("q5clumsy").classList.remove('required');
						document.getElementById("q5contralateral").classList.remove('required');
						document.getElementById("q5summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction. <br /> Hemianopia <br /> Homonymous/Cort. Blindness";
					}

					if($("#question_1").text() == 'Sensory, Higher cerebral functions' || 
						$("#question_1").text() == 'Sensory, Hemianopia' || 
						$("#question_1").text() == 'Motor, Higher cerebral functions' || 
						$("#question_1").text() == 'Motor, Hemianopia' || 
						$("#question_1").text() == 'Higher cerebral functions, Hemianopia' || 
						$("#question_1").text() == 'Sensory, Motor, Hemianopia'){

						document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("q5").style.display = "none";
						document.getElementById("q5ataxic").classList.remove('required');
						document.getElementById("q5pure").classList.remove('required');
						document.getElementById("q5bilateral").classList.remove('required');
						document.getElementById("q5restricted").classList.remove('required');
						document.getElementById("q5clumsy").classList.remove('required');
						document.getElementById("q5contralateral").classList.remove('required');
						document.getElementById("q5summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("result").innerHTML = "PACI – Partial Anterior Circulation Infarct.";
					}
					if($("#question_1").text() == 'Sensory, Motor, Higher cerebral functions' || 
						$("#question_1").text() == 'Sensory, Higher cerebral functions, Hemianopia' || 
						$("#question_1").text() == 'Sensory, Motor, Higher cerebral functions, Hemianopia' || 
						$("#question_1").text() == 'Motor, Higher cerebral functions, Hemianopia'){
						document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("q5").style.display = "none";
						document.getElementById("q5ataxic").classList.remove('required');
						document.getElementById("q5pure").classList.remove('required');
						document.getElementById("q5bilateral").classList.remove('required');
						document.getElementById("q5restricted").classList.remove('required');
						document.getElementById("q5clumsy").classList.remove('required');
						document.getElementById("q5contralateral").classList.remove('required');
						document.getElementById("q5summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("result").innerHTML = "TACI – Total Anterior Circulation Infarct.";
						} 
					if($("#question_1").text() == ''){    
						document.getElementById("q4").style.display = "none";
						document.getElementById("q4pure").classList.remove('required');
						document.getElementById("q4bilateral").classList.remove('required');
						document.getElementById("q4restricted").classList.remove('required');
						document.getElementById("q4contralateral").classList.remove('required');
						document.getElementById("q4summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("q5").style.display = "none";
						document.getElementById("q5ataxic").classList.remove('required');
						document.getElementById("q5pure").classList.remove('required');
						document.getElementById("q5bilateral").classList.remove('required');
						document.getElementById("q5restricted").classList.remove('required');
						document.getElementById("q5clumsy").classList.remove('required');
						document.getElementById("q5contralateral").classList.remove('required');
						document.getElementById("q5summary").style.display = "none";
						document.getElementById("next").click();

						document.getElementById("result").innerHTML = "Patient with no complains :)";
					}
				}
 
				if ($("#question_3").text() == 'No' && state.stepsComplete == 4 ){
					if($("#question_1").text() == 'Sensory'){
						if($("#question_4").text() == 'Pure'){
							document.getElementById("q5").style.display = "none";
							document.getElementById("q5ataxic").classList.remove('required');
							document.getElementById("q5pure").classList.remove('required');
							document.getElementById("q5bilateral").classList.remove('required');
							document.getElementById("q5restricted").classList.remove('required');
							document.getElementById("q5clumsy").classList.remove('required');
							document.getElementById("q5contralateral").classList.remove('required');
							document.getElementById("q5summary").style.display = "none";
							document.getElementById("next").click();

							document.getElementById("result").innerHTML = "LACI – Lacunar Infarct.";
						}
						if($("#question_4").text() == 'Bilateral'){
							document.getElementById("q5").style.display = "none";
							document.getElementById("q5ataxic").classList.remove('required');
							document.getElementById("q5pure").classList.remove('required');
							document.getElementById("q5bilateral").classList.remove('required');
							document.getElementById("q5restricted").classList.remove('required');
							document.getElementById("q5clumsy").classList.remove('required');
							document.getElementById("q5contralateral").classList.remove('required');
							document.getElementById("q5summary").style.display = "none";
							document.getElementById("next").click();

							document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction.";
						}
						if($("#question_4").text() == 'Restricted'){
							document.getElementById("q5").style.display = "none";
							document.getElementById("q5ataxic").classList.remove('required');
							document.getElementById("q5pure").classList.remove('required');
							document.getElementById("q5bilateral").classList.remove('required');
							document.getElementById("q5restricted").classList.remove('required');
							document.getElementById("q5clumsy").classList.remove('required');
							document.getElementById("q5contralateral").classList.remove('required');
							document.getElementById("q5summary").style.display = "none";
							document.getElementById("next").click();

							document.getElementById("result").innerHTML = "PACI – Partial Anterior Circulation Infarct.";
						}
						if($("#question_4").text() == 'Contralateral Cranial-Nerve Palsy'){
							document.getElementById("q5").style.display = "none";
							document.getElementById("q5ataxic").classList.remove('required');
							document.getElementById("q5pure").classList.remove('required');
							document.getElementById("q5bilateral").classList.remove('required');
							document.getElementById("q5restricted").classList.remove('required');
							document.getElementById("q5clumsy").classList.remove('required');
							document.getElementById("q5contralateral").classList.remove('required');
							document.getElementById("q5summary").style.display = "none";
							document.getElementById("next").click();

							document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction.";
						}
					}
				}
 
				if (state.stepsComplete == 5){
					switch($("#question_5").text()){
						case 'Ataxic':
							document.getElementById("result").innerHTML = "LACI – Lacunar Infarct. <br /> Motor: Ataxic.";
							break;
						case 'Pure':
							document.getElementById("result").innerHTML = "LACI – Lacunar Infarct. <br /> Motor: Pure.";
							break;
						case 'Bilateral':
							document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction. <br /> Motor: Bilateral.";
							break;
						case 'Restricted':
							document.getElementById("result").innerHTML = "PACI – Partial Anterior Circulation Infarct. <br /> Motor: Restricted.";
							break;
						case 'Clumsy-Hand':
							document.getElementById("result").innerHTML = "LACI – Lacunar Infarct.";
							break;
						case 'Contralateral Cranial-Nerve Palsy':
							document.getElementById("result").innerHTML = "POCI – Posterior Circulation	Infarction.";
							break;
		
					}

				}

			}
		});
		// Validate select
		$('#wrapped').validate({
			ignore: [],
			rules: {
				select: {
					required: true
				}
			},
			errorPlacement: function (error, element) {
				if (element.is('select:hidden')) {
					error.insertAfter(element.next('.nice-select'));
				} else {
					error.insertAfter(element);
				}
			}
		});
	});

// Summary 
function getVals(formControl, controlType) {
	switch (controlType) {

		
		case 'question_1':
			// Get name for set of checkboxes
			var checkboxName = $(formControl).attr('name');
			
			// Get all checked checkboxes
			var value = [];
			$("input[name*='" + checkboxName + "']").each(function () {
				// Get all checked checboxes in an array
				if (jQuery(this).is(":checked")) {
					value.push($(this).val());
				}
			});
			$("#question_1").text(value.join(", "));
			break;
			
		case 'question_2':
			// Get the value for a radio
			var value = $(formControl).val();
			$("#question_2").text(value);
			break;

		case 'question_3':
			// Get the value for a radio
			var value = $(formControl).val();
			$("#question_3").text(value);
			break;

		case 'question_4':
			// Get the value for a radio
			var value = $(formControl).val();
			$("#question_4").text(value);
			break;

		case 'question_5':
			// Get the value for a radio
			var value = $(formControl).val();
			$("#question_5").text(value);
			break;

		case 'additional_message':
			// Get the value for a textarea
			var value = $(formControl).val();
			$("#additional_message").text(value);
			break;
	}
}