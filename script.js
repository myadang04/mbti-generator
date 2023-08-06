const form = document.getElementById('quiz');
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener('submit', handleForm);

function findMbti() {
	const q1 = form.q1.value;
	const q2 = form.q2.value;
	const q3 = form.q3.value;
	const q4 = form.q4.value;

	let mbtiType = '';

	// Determine the MBTI type based on the user's answers
	if (q1 === 'E') mbtiType += 'E';
	else if (q1 === 'I') mbtiType += 'I';

	if (q2 === 'S') mbtiType += 'S';
	else if (q2 === 'N') mbtiType += 'N';

	if (q3 === 'T') mbtiType += 'T';
	else if (q3 === 'F') mbtiType += 'F';

	if (q4 === 'J') mbtiType += 'J';
	else if (q4 === 'P') mbtiType += 'P';

	const answerbox = document.getElementById('answer');

	if (mbtiType === 'INTJ') { 
	  answerbox.innerHTML = "INTJ – Architect: Another nickname for this personality type is “The Mastermind.” INTJs use logic, patterns, and reasoning to find solutions. It’s not that they’re not team players – they just do their best work independently. Think Steven Hawking and Bill Gates.";
	}

	if (mbtiType === 'INTP') { 
		answerbox.innerHTML = "INTP – Logician: This is another personality type that reflects a logical, private person. INTPs are typically more reserved than INTJs. They think on a large scale, and if they follow through with their big ideas, they can change the world. Louis Theroux and Albert Einstein are two classic examples of the INTP personality type.";
	}

	if (mbtiType === 'ENTJ') { 
		answerbox.innerHTML = "ENTJ – Commander: Need someone to get something done? The ENTJ is one of your best bets. They make decisions quickly, know how to delegate, and build teams to help accomplish their goals. Quentin Tarantino and Kamala Harris are two great examples of ENTJs. They make wonderful leaders!";
	}

	if (mbtiType === 'ENTP') { 
		answerbox.innerHTML = "ENTP – Debater: If you want to work through a challenge, recruit an ENTP. This personality type is defined by their enthusiasm for challenges and collaborative approach. Yes, they are not opposed to a friendly debate, as different perspectives can lead teams to the best solution for all. Socrates and Sasha Baron Cohen are both considered to be ENTPs.";
	}

	if (mbtiType === 'INFJ') { 
		answerbox.innerHTML = "INFJ – Advocate: Introverts don’t just shut themselves up in their rooms or labs all day! The advocate is a great example of an INFJ that refuels alone but works well with (and for) other people. They believe in the power of collaboration and uplifting others to achieve a common goal. Lady Gaga and Yoko Ono are great examples of INFJs. This is also the rarest personality type in the world! ";
	}

	if (mbtiType === 'INFP') { 
		answerbox.innerHTML = "INFP – Mediator: This personality type is also known as “The Healer.” INFPs are a special group of people. They have an idealistic version of the world and they want to see it actualized! They tend to be creative, caring, and very intuitive. Although they work best alone, they cherish the close relationships they have. John Lennon and Princess Diana are two great examples of people that embody this personality type.";
	}

	if (mbtiType === 'ENFJ') { 
		answerbox.innerHTML = "ENFJ – Protagonist: Talk about main character energy! ENFJs are dynamic and charming, but they aren’t just on their own hero’s journey. They bring people along with them. Everybody wins when they are surrounded by an ENFJ. People who embody this personality type include Barak Obama and Oprah Winfrey.";
	}

	if (mbtiType === 'ENFP') { 
		answerbox.innerHTML = "ENFP – Campaigner: ENFPs make the best cheerleaders; this is why they are also known as “The Champion.” They want to champion others’ ideas. Typically big-picture thinkers, ENFPs love to collect new experiences and work with others to make things happen. Think Russell Brand or Kanye West.";
	}

	if (mbtiType === 'ISTJ') { 
		answerbox.innerHTML = "ISTJ – Logistician: You can always rely on an ISTJ to be where they need to be. Their schedules are color-coordinated and they always make deadlines. ISTJs are organized, practical, and loyal to the traditions they practice. Even so, they aren’t afraid to push boundaries. Queen Elizabeth II and Henry Ford are two great examples of how ISTJs can change the world.";
	}
  
	if (mbtiType === 'ISFJ') { 
		answerbox.innerHTML = "ISFJ – Defender: This is the most common personality type in the world! Also known as “The Protector,” ISFJs are kind, caring, and unassuming. They are sensitive to people around them, but that doesn’t make them soft. They fight hard for the traditions, relationships, and duties that they hold close to them. Mother Teresa and Kate Middleton are two people who embody what it means to be an ISFJ!";
	}

	if (mbtiType === 'ESTJ') { 
		answerbox.innerHTML = "ESTJ – Executive: ESTJs are the life of the party who people depend on to get things done. They have very strong beliefs about what their life and community should look like, and they charge forward toward making these beliefs come true. They make great leaders, delegators, and spokespeople. Think Kris Jenner and Michelle Obama. They walk into a room and immediately gain the respect of everyone around them!";
	}
  
	if (mbtiType === 'ESFJ') { 
		answerbox.innerHTML = "ESFJ – Consul: ESFJs bring people together toward a common goal. They certainly aren’t going to take all the credit but will secretly want it to feel validated. They are sensitive, supportive, and incredibly organized. The typical ESFJ is doing thankless jobs like working as a teacher or in healthcare. Dolly Parton and Joe Biden are both typical ESFJs!";
	}
  
	if (mbtiType === 'ISTP') { 
		answerbox.innerHTML = "ISTP – Virtuoso: ISTPs don’t let questions pass by them. They look for answers. Often, this requires some solo research or experience. An ISTP isn’t afraid to try something new or take a risk for the sake of learning. In fact, they welcome it! They do not need anyone to ask them to find the answer because they have the natural inclination to do it themselves. Michael Jordan and Amelia Earhart are two examples of ISTPs.";
	}
  
	if (mbtiType === 'ISFP') { 
		answerbox.innerHTML = "ISFP – Adventurer: ISFPs are similar to ISTPs in that they both seek out new experiences and keep open minds. But an ISFP acts on their feelings and emotions over their logic and reasoning. Tend to live life dangerously, and want to fully live it every day? You may be an ISFP, and you’re joined by great company! Jimi Hendrix and Cher are both considered ISFPs.";
	}
  
	if (mbtiType === 'ESTP') { 
		answerbox.innerHTML = "ESTP – Entrepreneur: What makes an ESTP an entrepreneur? First, they work tirelessly and efficiently toward their goals. This often means delegating tasks to people who are more skilled, which is no problem for the ESTP. They are very social and can get people excited about the road ahead. When an ESTP believes in a cause, everyone around them will, too. Madonna and Winston Churchill are classic examples of ESTP.";
	}
  
	if (mbtiType === 'ESFP') { 
		answerbox.innerHTML = "ESFP – Entertainer: Talk about the real life of the party! ESFPs love to have all eyes on them and create a positive experience. They aren’t super serious or organized, but not everyone can be! Their strengths lie in their people skills. Elvis Presley and Miley Cyrus are considered great examples of the ESFP personality type.";
	}  
  }

  
// program the reset button
function resetAnswer() {
	const answerbox = document.getElementById('answer');
	answerbox.innerHTML = "Your result will show up here!";
}